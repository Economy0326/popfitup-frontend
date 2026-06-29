import type { PopupItem } from '../types/popup'

export const mockPopups: PopupItem[] = [
  {
    id: 1,
    name: '성수 감각 문구 팝업',
    title: '성수 감각 문구 팝업',
    address: '서울 성동구 연무장길 12',
    regionLabel: '서울 성동구',
    lat: 37.5446,
    lon: 127.0557,
    startDate: '2026-06-01',
    endDate: '2026-07-14',
    description:
      '성수동에서 열리는 문구 브랜드 팝업입니다. 한정판 노트, 스티커, 필기구를 직접 체험하고 구매할 수 있습니다.',
    webSiteLink: 'https://example.com',
    weeklyViewCount: 1480,
    favoriteCount: 326,
    images: ['/images/mock/popup-stationery.svg'],
    thumbnail: '/images/mock/popup-stationery.svg',
    categories: ['lifestyle'],
    updated: '2026-06-20',
    isFavorited: true,
  },
  {
    id: 2,
    name: '더현대 뷰티 팝업',
    title: '더현대 뷰티 팝업',
    address: '서울 영등포구 여의대로 108',
    regionLabel: '서울 영등포구',
    lat: 37.5259,
    lon: 126.9284,
    startDate: '2026-06-10',
    endDate: '2026-06-30',
    description: '신제품 체험존과 포토존을 함께 운영하는 뷰티 브랜드 팝업입니다.',
    weeklyViewCount: 2010,
    favoriteCount: 512,
    images: ['/images/mock/popup-beauty.svg'],
    thumbnail: '/images/mock/popup-beauty.svg',
    categories: ['beauty'],
    updated: '2026-06-21',
    isFavorited: true,
  },
  {
    id: 3,
    name: '홍대 캐릭터 굿즈 팝업',
    title: '홍대 캐릭터 굿즈 팝업',
    address: '서울 마포구 와우산로 29',
    regionLabel: '서울 마포구',
    lat: 37.5563,
    lon: 126.9236,
    startDate: '2026-06-15',
    endDate: '2026-07-20',
    description: '한정판 캐릭터 굿즈와 포토카드 이벤트를 제공하는 팝업스토어입니다.',
    weeklyViewCount: 1760,
    favoriteCount: 421,
    images: ['/images/mock/popup-character.svg'],
    thumbnail: '/images/mock/popup-character.svg',
    categories: ['character'],
    updated: '2026-06-18',
    isFavorited: false,
  },
  {
    id: 4,
    name: '익선동 디저트 팝업',
    title: '익선동 디저트 팝업',
    address: '서울 종로구 수표로28길 21',
    regionLabel: '서울 종로구',
    lat: 37.5744,
    lon: 126.9898,
    startDate: '2026-07-01',
    endDate: '2026-07-31',
    description: '시즌 한정 디저트와 음료를 판매하는 디저트 팝업입니다.',
    weeklyViewCount: 980,
    favoriteCount: 145,
    images: ['/images/mock/popup-dessert.svg'],
    thumbnail: '/images/mock/popup-dessert.svg',
    categories: ['food'],
    updated: '2026-06-17',
    isFavorited: false,
  },
  {
    id: 5,
    name: '압구정 패션 쇼룸 팝업',
    title: '압구정 패션 쇼룸 팝업',
    address: '서울 강남구 압구정로 일대',
    regionLabel: '서울 강남구',
    lat: null,
    lon: null,
    startDate: '2026-06-05',
    endDate: '2026-06-28',
    description:
      '압구정 일대에서 진행되는 시즌 패션 쇼룸 팝업입니다. 정확한 위치는 브랜드 공식 채널을 통해 확인할 수 있습니다.',
    weeklyViewCount: 620,
    favoriteCount: 72,
    images: ['/images/mock/popup-fashion.svg'],
    thumbnail: '/images/mock/popup-fashion.svg',
    categories: ['fashion'],
    updated: '2026-06-15',
    isFavorited: true,
  },
  {
    id: 6,
    name: '한남 라이프스타일 팝업',
    title: '한남 라이프스타일 팝업',
    address: '서울 용산구 한남대로 91',
    regionLabel: '서울 용산구',
    lat: 37.5345,
    lon: 127.0026,
    startDate: '2026-06-22',
    endDate: '2026-07-10',
    description: '감각적인 홈데코와 라이프스타일 제품을 소개하는 한남동 팝업입니다.',
    weeklyViewCount: 410,
    favoriteCount: 51,
    images: [],
    thumbnail: null,
    categories: ['lifestyle'],
    updated: '2026-06-14',
    isFavorited: true,
  },
  {
    id: 7,
    name: '명동 브랜드 체험 팝업',
    title: '명동 브랜드 체험 팝업',
    address: '서울 중구 명동길 14',
    regionLabel: '서울 중구',
    lat: 37.5636,
    lon: 126.9822,
    startDate: '2026-07-03',
    endDate: '2026-07-18',
    description: '',
    weeklyViewCount: 260,
    favoriteCount: 19,
    images: ['/images/mock/popup-empty.svg'],
    thumbnail: '/images/mock/popup-empty.svg',
    categories: [],
    updated: '2026-06-11',
    isFavorited: false,
  },
  {
    id: 8,
    name: '부산 해운대 여름 팝업',
    title: '부산 해운대 여름 팝업',
    address: '부산 해운대구 해운대해변로 264',
    regionLabel: '부산 해운대구',
    lat: 35.1587,
    lon: 129.1604,
    startDate: '2026-07-05',
    endDate: '2026-08-15',
    description: '해운대 해변 근처에서 열리는 여름 시즌 팝업입니다.',
    weeklyViewCount: 720,
    favoriteCount: 83,
    images: ['/images/mock/popup-summer.svg'],
    thumbnail: '/images/mock/popup-summer.svg',
    categories: ['theme_park'],
    updated: '2026-06-12',
    isFavorited: false,
  },
]

// 팝업 상세 조회용 mock 데이터 생성 함수
export function getMockPopupById(id: number) {
  return mockPopups.find((popup) => popup.id === id) ?? null
}

// home 초기화용 mock 데이터 생성 함수
export function getMockHomeInitial() {
  return {
    latest: [...mockPopups]
      .sort((a, b) => String(b.updated).localeCompare(String(a.updated)))
      .slice(0, 6),
    popular: [...mockPopups]
      .sort((a, b) => (b.favoriteCount ?? 0) - (a.favoriteCount ?? 0))
      .slice(0, 6),
    monthly: mockPopups.filter((popup) => popup.startDate.startsWith('2026-07')),
  }
}

// 월별 팝업 조회용 mock 데이터 생성 함수
export function getMockMonthly(month: string) {
  return {
    monthly: mockPopups.filter((popup) => {
      return popup.startDate.startsWith(month) || popup.endDate.startsWith(month)
    }),
  }
}

// 검색용 mock 데이터 생성 함수
// URLSearchParams를 받아서 region, category, date, page, pageSize를 기준으로 필터링 후 반환
export function searchMockPopups(params: URLSearchParams) {
  const region = params.get('region')
  const category = params.get('category')
  const date = params.get('date')
  const page = Number(params.get('page') ?? '1')
  const pageSize = Number(params.get('pageSize') ?? '15')

  let items = [...mockPopups]

  if (region && region !== '전체') {
    items = items.filter((popup) =>
      `${popup.address} ${popup.regionLabel ?? ''}`.includes(region)
    )
  }

  if (category && category !== '전체') {
    items = items.filter((popup) => popup.categories?.includes(category))
  }

  if (date) {
    items = items.filter(
      (popup) => popup.startDate <= date && popup.endDate >= date
    )
  }

  const total = items.length
  const start = (page - 1) * pageSize

  return {
    items: items.slice(start, start + pageSize),
    total,
    page,
    pageSize,
  }
}

// 관련 팝업 조회용 mock 데이터 생성 함수
export function getMockSimilarPopups(id: number) {
  const current = getMockPopupById(id)

  if (!current?.categories?.length) {
    return { items: [] }
  }

  return {
    items: mockPopups
      .filter(
        (popup) =>
          popup.id !== id &&
          popup.categories?.some((category) =>
            current.categories?.includes(category)
          )
      )
      .slice(0, 6),
  }
}

// 근처 팝업 조회용 mock 데이터 생성 함수
export function getMockNearbyPopups(id: number) {
  const current = getMockPopupById(id)

  if (!current?.regionLabel) {
    return { items: [] }
  }

  const sido = current.regionLabel.split(' ')[0]

  return {
    items: mockPopups
      .filter(
        (popup) =>
          popup.id !== id &&
          popup.regionLabel?.startsWith(sido)
      )
      .slice(0, 6),
  }
}