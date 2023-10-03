import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

import s from './dropdown.module.scss'
import { dropdownAnimations } from './dropdownMenuAnimations'

import { Avatar } from '@/components/ui/avatar'

export type DropdownProps = {
  children: ReactNode
  trigger?: ReactNode
  align?: 'start' | 'center' | 'end'
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Content>

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Content>, DropdownProps>(
  ({ children, trigger, align = 'end', className }, ref): JSX.Element => {
    const [open, setOpen] = useState(false)

    const classNames = {
      trigger: s.trigger,
      button: s.button,
      content: cn(s.content, className),
      arrow: s.arrow,
    }

    return (
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger className={classNames.trigger} asChild>
          {trigger ?? (
            <button className={classNames.button}>
              <Avatar size={'small'} userName={'Ilmir Rakhmatullin'} />
            </button>
          )}
        </DropdownMenu.Trigger>

        <AnimatePresence>
          {open && (
            <DropdownMenu.Portal forceMount>
              <DropdownMenu.Content
                ref={ref}
                className={classNames.content}
                align={align}
                onClick={event => event.stopPropagation()}
                asChild
                forceMount
              >
                <motion.div animate={open ? 'open' : 'closed'} {...dropdownAnimations.menu}>
                  <div>{children}</div>
                  <DropdownMenu.Arrow className={classNames.arrow} />
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    )
  }
)
