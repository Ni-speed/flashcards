import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import cn from 'classnames'

import s from './grade.module.scss'

import { Star, StarOutline } from '@/assets'

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

type GradeProps = {
  rating: number
  maxRating?: number
  size?: number
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Grade: FC<GradeProps> = forwardRef<ElementRef<'div'>, GradeProps>(
  ({ rating, maxRating = 5, size = 1.6, className, ...restProps }, ref): JSX.Element => {
    const stars = [...Array(maxRating)].map((_, index) => index + 1)

    const ratingClasses = cn(s.root, className)

    return (
      <div ref={ref} className={ratingClasses} {...restProps}>
        {stars.map((star, index) => {
          return rating >= star ? <Star key={index} /> : <StarOutline key={index} />
        })}
      </div>
    )
  }
)
