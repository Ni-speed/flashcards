import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '.'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const SingIn: Story = {
  args: {
    isLoggedIn: false,
  },
}

export const LoggedIn: Story = {
  args: {
    avatar: 'https://icon-library.com/images/headshot-icon/headshot-icon-17.jpg',
    name: 'Ilmir',
    email: 'railmir@gmail.com',
    isLoggedIn: true,
  },
}
