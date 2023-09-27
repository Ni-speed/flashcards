import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'subtitle1'
    | 'body2'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  className?: string
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest}></Component>
}
