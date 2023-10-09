import { CreateDeckArgs, Deck, GetDecksResponse } from './'

import { baseApi } from '@/services/base-api.ts'

export const DecksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<GetDecksResponse, void>({
        query: () => `v1/decks`,
        providesTags: ['Decks'],
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        query: body => ({
          url: 'v1/decks',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Decks'],
      }),
    }
  },
})
export const { useGetDecksQuery, useCreateDeckMutation } = DecksService
