import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '../avatar'

import s from './dropdown.module.scss'

import { Dropdown, DropdownItem, DropdownItemWithIcon } from './'

import { LogOutOutline, PersonOutline } from '@/assets'
import { Typography } from '@/components'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    trigger: {},
    children: {},
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

const src =
  'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'

export const Default: Story = {
  args: {
    trigger: (
      <>
        <Typography variant={'subtitle1'}>Sergey</Typography>
        <Avatar src={src} name={'avatar'} size={36} />
      </>
    ),
    children: (
      <>
        <DropdownItem disabled>
          <div className={s.item}>
            <Avatar src={src} name={'avatar'} size={36} />
            <div>
              <Typography variant={'subtitle2'}>Sergey</Typography>
              <Typography variant={'caption'}>sergey.ose.pyatigorsk@gmail.com</Typography>
            </div>
          </div>
        </DropdownItem>
        <DropdownItemWithIcon icon={<PersonOutline />} text={'Profile'} onSelect={() => {}} />
        <DropdownItemWithIcon icon={<LogOutOutline />} text={'Logout'} onSelect={() => {}} />
      </>
    ),
  },
}
