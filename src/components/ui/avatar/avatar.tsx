import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import cn from 'classnames'

import s from './avatar.module.scss'

import { Typography } from '@/components'
export type AvatarProps = {
  userName: string
  image?: string
  size?: 'small' | 'large'
} & ComponentPropsWithoutRef<typeof RadixAvatar.Root>

export const Avatar: FC<AvatarProps> = forwardRef<ElementRef<typeof RadixAvatar.Root>, AvatarProps>(
  ({ userName, image, size = 'small', className, ...rest }, ref) => {
    const classNames = {
      root: cn(s.root, s[size], className),
      image: s.image,
      fallback: s.fallback,
    }
    const fallbackTitle = userName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()

    return (
      <RadixAvatar.Root ref={ref} className={classNames.root} {...rest}>
        <RadixAvatar.Image
          className={classNames.image}
          src={
            /*image*/ // todo added avatar icon //
            'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'
          }
          alt={'awatar'}
        />
        <RadixAvatar.Fallback>
          <Typography>{fallbackTitle}</Typography>
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    )
  }
)
