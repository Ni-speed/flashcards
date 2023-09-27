import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '..'

import { Card } from '.'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardBlock: Story = {
  args: {
    children: (
      <>
        <a href="https://www.youtube.com/">Link</a>
        <Button as={'a'} href="https://www.youtube.com/" variant="primary">
          Button as link
        </Button>
      </>
    ),
  },
}
