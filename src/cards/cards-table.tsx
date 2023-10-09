import { FC } from 'react'

import { TableElements } from '@/components'
import s from '@/components/ui/table/table.module.scss'
import { useGetDecksQuery } from '@/services/base-api.ts'

type CardTableProps = {}
export const CardsTable: FC<CardTableProps> = () => {
  const { data } = useGetDecksQuery()

  return (
    <TableElements.Table>
      <TableElements.Head>
        <TableElements.Row>
          <TableElements.HeadCell className={s.headCell}>Name</TableElements.HeadCell>
          <TableElements.HeadCell className={s.headCell}>Cards</TableElements.HeadCell>
          <TableElements.HeadCell className={s.headCell}>Last Update</TableElements.HeadCell>
          <TableElements.HeadCell className={s.headCell}>Created by</TableElements.HeadCell>
        </TableElements.Row>
      </TableElements.Head>
      <TableElements.Body>
        {data?.items.map(deck => {
          return (
            <TableElements.Row key={deck.id}>
              <TableElements.HeadCell className={s.tableCell}>{deck.name}</TableElements.HeadCell>
              <TableElements.HeadCell className={s.tableCell}>
                {deck.cardsCount}
              </TableElements.HeadCell>
              <TableElements.HeadCell className={s.tableCell}>
                {new Date(deck.updated).toLocaleDateString()}
              </TableElements.HeadCell>
              <TableElements.HeadCell className={s.tableCell}>
                {deck.author.name}
              </TableElements.HeadCell>
            </TableElements.Row>
          )
        })}
      </TableElements.Body>
    </TableElements.Table>
  )
}
