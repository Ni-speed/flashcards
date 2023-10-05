import { Meta, StoryObj } from '@storybook/react'

import { Grade } from '@/components'

const meta: Meta<typeof Grade> = {
  title: 'Components/Grade',
  component: Grade,
  tags: ['autodocs'],
  argTypes: {
    rating: Number,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    rating: 5,
  },
}

export const Empty: Story = {
  args: {
    rating: 0,
  },
}

export const Mixed: Story = {
  args: {
    rating: 6,
    maxRating: 8,
  },
}
