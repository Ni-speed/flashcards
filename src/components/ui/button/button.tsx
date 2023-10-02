import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props

  return (
    <Component
      className={`${s[variant]} ${s.button} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
export default forwardRef(Button)
