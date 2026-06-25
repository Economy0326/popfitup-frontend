import type { CreateReportPayload, ReportItem } from '../api/reports'

export const mockReports: ReportItem[] = [
  {
    id: 1,
    userId: 1,
    name: '잠실 스포츠 브랜드 팝업',
    address: '서울 송파구 올림픽로 300',
    description: '한정판 러닝화 체험 이벤트가 있는 팝업스토어입니다.',
    createdAt: '2026-06-18T10:30:00.000Z',
    answer: '제보 감사합니다. 운영 기간과 장소 확인 후 반영 예정입니다.',
    answeredAt: '2026-06-19T09:00:00.000Z',
  },
  {
    id: 2,
    userId: 1,
    name: '성수 향수 팝업',
    address: '서울 성동구 서울숲길 45',
    description: '신규 향수 라인 시향 공간이 운영 중입니다.',
    createdAt: '2026-06-20T14:10:00.000Z',
    answer: null,
    answeredAt: null,
  },
]

// 리포트 목록을 조회하는 함수
export function getMockReports() {
  return { reports: mockReports }
}

// 새로운 리포트를 생성하는 함수
export function createMockReport(payload: CreateReportPayload) {
  const nextId = Math.max(...mockReports.map((report) => report.id), 0) + 1

  mockReports.unshift({
    id: nextId,
    userId: 1,
    name: payload.name,
    address: payload.address,
    description: payload.description,
    createdAt: new Date().toISOString(),
    answer: null,
    answeredAt: null,
  })

  return { ok: true, id: nextId }
}

// 리포트에 대한 답변을 작성하는 함수
export function answerMockReport(id: number, answer: string) {
  const target = mockReports.find((report) => report.id === id)

  if (target) {
    target.answer = answer
    target.answeredAt = new Date().toISOString()
  }

  return { ok: true }
}

// 리포트를 삭제하는 함수
export function deleteMockReport(id: number) {
  const index = mockReports.findIndex((report) => report.id === id)

  if (index >= 0) {
    mockReports.splice(index, 1)
  }

  return { ok: true }
}