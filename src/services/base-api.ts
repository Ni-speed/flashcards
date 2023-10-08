import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GetDecksResponse } from '@/services/types.ts'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<GetDecksResponse, void>({
        query: () => `v1/decks`,
      }),
    }
  },
})

export const { useGetDecksQuery } = baseApi
