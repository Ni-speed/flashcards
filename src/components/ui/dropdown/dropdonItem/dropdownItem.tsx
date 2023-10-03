import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { motion } from 'framer-motion'

import s from './dropdownItem.module.scss'

import { Typography } from '@/components'
import { dropdownAnimations } from '@/components/ui/dropdown/dropdownMenuAnimations.ts'

export type DropdownItemProps = {
  children: ReactNode
  onSelect?: (event: Event) => void
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropdownItem = forwardRef<ElementRef<typeof DropdownMenu.Item>, DropdownItemProps>(
  ({ children, onSelect, className }, ref): JSX.Element => {
    const DropdownItemClasses = cn(s.item, className)

    return (
      <>
        <DropdownMenu.Item ref={ref} className={DropdownItemClasses} onSelect={onSelect} asChild>
          <motion.div {...dropdownAnimations.item}>{children}</motion.div>
        </DropdownMenu.Item>
      </>
    )
  }
)
export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropdownItemWithIcon = forwardRef<
  ElementRef<typeof DropdownMenu.Item>,
  DropdownItemWithIconProps
>(({ icon, text, onSelect, className, ...props }, ref): JSX.Element => {
  const classNames = {
    item: cn(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <>
      <DropdownMenu.Item ref={ref} className={classNames.item} asChild {...props}>
        <motion.div {...dropdownAnimations.item}>
          <div className={classNames.itemIcon}>{icon}</div>
          <Typography variant={'caption'}>{text}</Typography>
        </motion.div>
      </DropdownMenu.Item>
    </>
  )
})
