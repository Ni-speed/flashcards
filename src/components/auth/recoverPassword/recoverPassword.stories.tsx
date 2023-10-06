import type { Meta, StoryObj } from '@storybook/react'

import { RecoverPassword } from './'

const meta = {
  title: 'Auth/RecoverPassword',
  component: RecoverPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof RecoverPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.log(data),
  },
}
