import {
  getMockHomeInitial,
  getMockMonthly,
  getMockNearbyPopups,
  getMockPopupById,
  getMockSimilarPopups,
  mockPopups,
  searchMockPopups,
} from './popups'
import {
  answerMockReport,
  createMockReport,
  deleteMockReport,
  getMockReports,
} from './reports'
import { mockUser } from './user'

function parseBody(options: RequestInit) {
  if (!options.body || typeof options.body !== 'string') {
    return null
  }

  try {
    return JSON.parse(options.body)
  } catch {
    return null
  }
}

export async function mockApi<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const [pathname, queryString = ''] = path.split('?')
  const params = new URLSearchParams(queryString)
  const method = options.method ?? 'GET'

  await new Promise((resolve) => setTimeout(resolve, 250))

  if (pathname === '/api/users/me') {
    return mockUser as T
  }

  if (pathname === '/auth/logout') {
    return { ok: true } as T
  }

  if (pathname === '/api/popups/home') {
    const month = params.get('month')

    if (month) {
      return getMockMonthly(month) as T
    }

    return getMockHomeInitial() as T
  }

  if (pathname === '/api/popups') {
    return searchMockPopups(params) as T
  }

  const detailMatch = pathname.match(/^\/api\/popups\/(\d+)$/)
  if (detailMatch) {
    const popup = getMockPopupById(Number(detailMatch[1]))

    if (!popup) {
      throw new Error('Mock popup not found')
    }

    return popup as T
  }

  const similarMatch = pathname.match(/^\/api\/popups\/(\d+)\/similar$/)
  if (similarMatch) {
    return getMockSimilarPopups(Number(similarMatch[1])) as T
  }

  const nearbyMatch = pathname.match(/^\/api\/popups\/(\d+)\/nearby$/)
  if (nearbyMatch) {
    return getMockNearbyPopups(Number(nearbyMatch[1])) as T
  }

  if (pathname === '/api/users/me/favorites') {
    return {
      items: mockPopups.filter((popup) => popup.isFavorited),
    } as T
  }

  if (pathname === '/api/favorites' && method === 'POST') {
    const body = parseBody(options)
    const popupId = Number(body?.popupId)
    const target = mockPopups.find((popup) => popup.id === popupId)

    if (target) {
      target.isFavorited = true
      target.favoriteCount = (target.favoriteCount ?? 0) + 1
    }

    return {
      ok: true,
      favoriteCount: target?.favoriteCount ?? 1,
    } as T
  }

  const favoriteDeleteMatch = pathname.match(/^\/api\/favorites\/(\d+)$/)
  if (favoriteDeleteMatch && method === 'DELETE') {
    const popupId = Number(favoriteDeleteMatch[1])
    const target = mockPopups.find((popup) => popup.id === popupId)

    if (target) {
      target.isFavorited = false
      target.favoriteCount = Math.max((target.favoriteCount ?? 1) - 1, 0)
    }

    return {
      ok: true,
      favoriteCount: target?.favoriteCount ?? 0,
    } as T
  }

  if (pathname === '/api/reports' && method === 'POST') {
    return createMockReport(parseBody(options)) as T
  }

  if (pathname === '/api/reports/mine') {
    return getMockReports() as T
  }

  if (pathname === '/api/reports' && method === 'GET') {
    return getMockReports() as T
  }

  const answerMatch = pathname.match(/^\/api\/reports\/(\d+)\/answer$/)
  if (answerMatch && method === 'POST') {
    const body = parseBody(options)
    return answerMockReport(Number(answerMatch[1]), body?.answer ?? '') as T
  }

  const reportDeleteMatch = pathname.match(/^\/api\/reports\/(\d+)$/)
  if (reportDeleteMatch && method === 'DELETE') {
    return deleteMockReport(Number(reportDeleteMatch[1])) as T
  }

  throw new Error(`Mock API가 준비되지 않은 요청입니다: ${method} ${path}`)
}