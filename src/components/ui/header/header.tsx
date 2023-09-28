import { ComponentPropsWithoutRef, FC } from 'react'

import s from './header.module.scss'
type HeaderProps = ComponentPropsWithoutRef<'header'>
export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  return <header className={`${s.header} ${className}`} {...rest} />
}
