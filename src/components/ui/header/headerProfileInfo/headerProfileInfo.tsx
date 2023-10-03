import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './headerProfileInfo.module.scss'

import { Typography } from '@/components'
import { Avatar } from '@/components/ui/avatar'

type HeaderProfileInfoProps = {
  name?: string
  avatar?: string
  email?: string
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const HeaderProfileInfo = forwardRef<ElementRef<'div'>, HeaderProfileInfoProps>(
  ({ name = 'name', avatar = 'avatar', email = 'email', className }) => {
    const classNames = {
      root: cn(s.root, className),
      textWrapper: s.textWrapper,
      text: s.text,
    }

    return (
      <div className={classNames.root}>
        <Avatar userName={name} image={avatar} size={'small'} />
        <div className={classNames.textWrapper}>
          <Typography variant={'subtitle1'}>{name}</Typography>
          <Typography variant={'caption'}>{email}</Typography>
        </div>
      </div>
    )
  }
)
