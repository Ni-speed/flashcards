import { ElementRef, FC, forwardRef, ReactNode } from 'react'

import s from './card.module.scss'

type CardProps = {
  children: ReactNode
  className?: string
}
export const Card: FC<CardProps> = forwardRef<ElementRef<'div'>, CardProps>(
  ({ children, className }) => {
    return <div className={`${s.cardBlock} ${className}`}>{children}</div>
  }
)
