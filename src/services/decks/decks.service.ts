import {
  CreateCardResponseType,
  CreateDeckArgs,
  Deck,
  GetDecksArgs,
  GetDecksResponse,
  GetRandomCard,
  SaveCardGradeType,
  UpdateDeckType,
} from './'

import { baseApi } from '@/services/base-api.ts'

export const DecksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<GetDecksResponse, GetDecksArgs>({
        query: args => ({
          url: `v1/decks`,
          params: args,
        }),
        providesTags: ['Decks'],
      }),
      getDesk: builder.query<Deck, Pick<Deck, 'id'>>({
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
          method: 'GET',
          providesTags: ['Decks'],
        }),
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        query: body => ({
          url: 'v1/decks',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Decks'],
      }),
      updateDeck: builder.mutation<Deck, UpdateDeckType>({
        query: ({ id, name, isPrivate }) => ({
          url: `v1/decks/${id}`,
          method: 'PATCH',
          body: { name, isPrivate },
          invalidatesTags: ['Decks'],
        }),
      }),
      deleteDeck: builder.mutation<Omit<Deck, 'author'>, Pick<Deck, 'id'>>({
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Decks'],
      }),
      // getPaginatedDeckCards: builder.query<
      //   Omit<GetDecksResponse, 'maxCardsCount'>,
      //   GetPaginatedDeckCardsType
      // >({
      //   query: ({ id, question, ...args }) => ({
      //     url: `/v1/decks/${id}/cards`,
      //     method: 'GET',
      //     params: { question, ...args },
      //   }),
      //   providesTags: ['Cards'],
      // }),
      // createDeckCard: builder.query<CreateCardResponseType, CreateDeckCardType>({
      //   query: ({ id, question, answer, ...args }) => ({
      //     url: `/v1/decks/${id}/cards`,
      //     method: 'POST',
      //     body: { question, answer, ...args },
      //   }),
      //   invalidatesTags: ['Cards'],
      // }),

      getRandomCard: builder.query<CreateCardResponseType, GetRandomCard>({
        query: ({ id, previousCardId }) => ({
          url: `/v1/decks/${id}/learn`,
          method: 'GET',
          params: { previousCardId },
        }),
        providesTags: ['Decks'],
      }),
      saveCardGrade: builder.query<any, SaveCardGradeType>({
        query: ({ id, cardId, grade }) => ({
          url: `/v1/decks/${id}/learn`,
          method: 'POST',
          body: { cardId, grade },
        }),
      }),
    }
  },
})
export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useGetDeskQuery,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
} = DecksService
