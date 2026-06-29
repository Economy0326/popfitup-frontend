import { mockApi } from '../mocks/mockApi'

export const API_BASE =
  import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

export async function api<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  if (USE_MOCK) {
    return mockApi<T>(path, options)
  }

  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const text = await res.text()

  if (!res.ok) {
    throw new Error(`API Error ${res.status}: ${text}`)
  }

  return text ? JSON.parse(text) : (null as T)
}