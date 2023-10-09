import type { Meta, StoryObj } from '@storybook/react'

import { TableElements } from './'

import { Grade } from '@/components'
import s from 'components/ui/table/table.module.scss'

const meta = {
  title: 'Components/UI/Table',
  component: TableElements.Table,
  tags: ['autodocs'],
} satisfies Meta<typeof TableElements.Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TableElements.Head>
          <TableElements.Row>
            <TableElements.HeadCell className={s.headCell}>Question</TableElements.HeadCell>
            <TableElements.HeadCell className={s.headCell}>Answer</TableElements.HeadCell>
            <TableElements.HeadCell className={s.headCell}>Last Updated</TableElements.HeadCell>
            <TableElements.HeadCell className={s.headCell}>Grade</TableElements.HeadCell>
          </TableElements.Row>
        </TableElements.Head>
        <TableElements.Body>
          <TableElements.Row>
            <TableElements.HeadCell className={s.tableCell}>
              How This works in JavaScript?
            </TableElements.HeadCell>
            <TableElements.HeadCell className={s.tableCell}>
              This is how This works in JavaScript
            </TableElements.HeadCell>
            <TableElements.HeadCell className={s.tableCell}>18.03.2021</TableElements.HeadCell>
            <TableElements.HeadCell className={s.tableCell}>
              <Grade rating={4} onClick={() => {}} />
            </TableElements.HeadCell>
          </TableElements.Row>
        </TableElements.Body>
        <TableElements.Row>
          <TableElements.HeadCell className={s.tableCell}>
            How This works in JavaScript?
          </TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>
            This is how This works in JavaScript
          </TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>18.03.2021</TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>
            <Grade rating={2} onClick={() => {}} />
          </TableElements.HeadCell>
        </TableElements.Row>
        <TableElements.Row>
          <TableElements.HeadCell className={s.tableCell}>
            How This works in JavaScript?
          </TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>
            This is how This works in JavaScript
          </TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>18.03.2021</TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>
            <Grade rating={3} onClick={() => {}} />
          </TableElements.HeadCell>
        </TableElements.Row>
        <TableElements.Row>
          <TableElements.HeadCell className={s.tableCell}>
            How This works in JavaScript?
          </TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>
            This is how This works in JavaScript
          </TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>18.03.2021</TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>
            <Grade rating={0} onClick={() => {}} />
          </TableElements.HeadCell>
        </TableElements.Row>
        <TableElements.Row>
          <TableElements.HeadCell className={s.tableCell}>
            How This works in JavaScript?
          </TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>
            This is how This works in JavaScript
          </TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>18.03.2021</TableElements.HeadCell>
          <TableElements.HeadCell className={s.tableCell}>
            <Grade rating={5} onClick={() => {}} />
          </TableElements.HeadCell>
        </TableElements.Row>
      </>
    ),
  },
}
