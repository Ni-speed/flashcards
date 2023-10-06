import type { Meta, StoryObj } from '@storybook/react'
// import { BrowserRouter } from 'react-router-dom'

import { CreateNewPassword } from './'

import { FormValues } from '@/components/auth/createNewPassword/createNewPassword.schema.ts'

const meta = {
  title: 'Auth/CreateNewPassword',
  component: CreateNewPassword,
  // decorators: [
  //   Story => (
  //     <BrowserRouter>
  //       <Story />
  //     </BrowserRouter>
  //   ),
  // ],
  tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: FormValues) => {
      console.log(data)
    },
  },
}
