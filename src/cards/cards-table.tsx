import { FC } from 'react'

import { Table } from '@/components'
import { useGetDecksQuery } from '@/services/base-api.ts'

type CardTableProps = {}
export const CardsTable: FC<CardTableProps> = () => {
  const { data } = useGetDecksQuery()

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Cards</Table.HeadCell>
          <Table.HeadCell>Last Update</Table.HeadCell>
          <Table.HeadCell>Created by</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data?.items.map(deck => {
          return (
            <Table.Row key={deck.id}>
              <Table.HeadCell>{deck.name}</Table.HeadCell>
              <Table.HeadCell>{deck.cardsCount}</Table.HeadCell>
              <Table.HeadCell>{new Date(deck.updated).toLocaleDateString()}</Table.HeadCell>
              <Table.HeadCell>{deck.author.name}</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
