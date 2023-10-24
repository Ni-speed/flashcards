export type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type GetPaginatedDeckCardsType = {
  id?: string
  question?: string
  answer?: string
  orderBy: string | null
  currentPage?: number
  itemsPerPage?: number
}

export type Author = {
  id: string
  name: string
}

export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate?: boolean
  shots: number
  cover?: string | null
  rating: number
  isDeleted?: any
  isBlocked?: any
  created: string
  updated: string
  cardsCount: number
}
export type CreateCardResponseType = Omit<
  Deck,
  'author' | 'name' | 'isPrivate' | 'cover' | 'isDeleted' | 'isBlocked' | 'cardsCount'
> & {
  deckId: string
  question: string
  answer: string
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  rating: number
}

export type GetDecksResponse = {
  maxCardsCount: number
  pagination: Pagination
  items: Deck[]
}
export type CreateDeckArgs = Pick<Deck, 'name' | 'cover' | 'isPrivate'>

export type UpdateDeckType = Pick<Deck, 'id' | 'cover' | 'name' | 'isPrivate'>

export type GetRandomCard = { id: string | undefined; previousCardId?: string }

export type SaveCardGradeType = {
  id: string | undefined
  cardId: string | undefined
  grade: number
}

export type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: Author['id']
  orderBy: string | null
  currentPage: Pagination['currentPage']
  itemsPerPage: Pagination['itemsPerPage']
}

export type CreateDeckCardType = {
  id: string | undefined
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  questionVideo?: string
  answerVideo?: string
}
