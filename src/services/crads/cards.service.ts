import { baseApi } from '@/services'
import { Card, UpdateCardType } from '@/services/crads/crads.types.ts'

export const CardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCard: builder.query<any, Pick<Card, 'id'>>({
        query: ({ id }) => ({
          url: `/v1/cards/${id}`,
          method: 'GET',
        }),
        providesTags: ['Cards'],
      }),
      updateCard: builder.mutation<Card, UpdateCardType>({
        query: ({ id, ...args }) => ({
          url: `/v1/cards/${id}`,
          method: 'PATCH',
          body: { ...args },
        }),
        invalidatesTags: ['Cards'],
      }),
      deleteCard: builder.mutation<any, Pick<Card, 'id'>>({
        query: ({ id }) => ({
          url: `/v1/cards/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Cards'],
      }),
    }
  },
})

export const { useGetCardQuery, useUpdateCardMutation, useDeleteCardMutation } = CardsService
