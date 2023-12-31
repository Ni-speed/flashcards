import type { Meta, StoryObj } from '@storybook/react'
// import { BrowserRouter } from 'react-router-dom'

import { CheckEmail } from './index.ts'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  // decorators: [
  //   Story => (
  //     <BrowserRouter>
  //       <Story />
  //     </BrowserRouter>
  //   ),
  // ],
  tags: ['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'railmir@gmail.com',
  },
}
