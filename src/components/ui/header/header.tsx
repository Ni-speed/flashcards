import { ComponentPropsWithoutRef, FC } from 'react'

import s from './header.module.scss'

import { Logo } from '@/assets'
import { Button } from '@/components'
type HeaderProps = ComponentPropsWithoutRef<'header'>
export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  return (
    <div className={`${s.header} ${className}`} {...rest}>
      <Logo />
      <Button
        as={'a'}
        href="https://www.youtube.com/watch?v=j7Wbb2Bcd9c&list=PLMH1EP4byJHRnHhGr4-madQs_PNRTGXft&index=2&t=912s"
        variant={'primary'}
      >
        Sign in
      </Button>
    </div>
  )
}
