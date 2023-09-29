import { Meta } from '@storybook/react'

import { Button, Typography } from '..'
import s from '../../page/friends-pack/friends-pack.module.scss'
import { Avatar } from '../avatar'
import { ProfileBlock } from '../profile-block'

import { DropDownMenuDemo } from '.'

import { Edit, LogOutOutline, Profile, SubMenu, TrashOutline } from '@/assets'
import Play from '@/assets/icons/play'

const meta = {
  title: 'Components/DropDownMenu',
  component: DropDownMenuDemo,
  tags: ['autodocs'],
} satisfies Meta<typeof DropDownMenuDemo>

export default meta

export const DropdownMenuFirstVariant = () => {
  const dropDownMenu = [
    {
      id: 1,
      component: (
        <Button variant={'link'} className={s.buttonDrop}>
          <Play />
          <Typography variant={'caption'}>Learn</Typography>
        </Button>
      ),
    },
    {
      id: 2,
      component: (
        <Button variant={'link'} className={s.buttonDrop}>
          <Edit />
          <Typography variant={'caption'}>Edit</Typography>
        </Button>
      ),
    },
    {
      id: 3,
      component: (
        <Button variant={'link'} className={s.buttonDrop}>
          <TrashOutline />
          <Typography variant={'caption'}>Delete</Typography>
        </Button>
      ),
    },
  ]

  return <DropDownMenuDemo items={dropDownMenu} trigger={<SubMenu />} />
}
export const DropdownMenuSecondVariant = () => {
  const dropDownMenu = [
    { id: 1, component: <ProfileBlock /> },
    {
      id: 2,
      component: (
        <Button variant={'link'} className={s.buttonDrop}>
          <Profile />
          <Typography variant={'caption'}>My Profile</Typography>
        </Button>
      ),
    },
    {
      id: 3,
      component: (
        <Button variant={'link'} className={s.buttonDrop}>
          <LogOutOutline />
          <Typography variant={'caption'}>Sign Out</Typography>
        </Button>
      ),
    },
  ]

  return <DropDownMenuDemo items={dropDownMenu} trigger={<Avatar name={'A'} src={''} />} />
}
