import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Pagination } from './index.ts'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta

const PaginationWithHooks = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState('8')
  const TOTAL_PAGES_COUNT = 10

  return (
    <Pagination
      count={TOTAL_PAGES_COUNT}
      page={page}
      onChange={setPage}
      perPage={perPage}
      onPerPageChange={setPerPage}
      perPageOptions={[5, 8, 12, 100]}
    />
  )
}

export const Default = {
  render: () => <PaginationWithHooks />,
}
