import type { Meta, StoryObj } from '@storybook/react'

import { Button, Card } from '@/components'

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
        <Card>
          Card
          <Button>Sign out</Button>
        </Card>
      </>
    ),
  },
}
