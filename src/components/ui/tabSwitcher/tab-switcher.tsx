import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

import { Typography } from '@/components'

type PropsType = {
  className?: string
  options?: any[]
  onChangeCallback?: (value: string) => void
  defaultValue?: string
}
export const TabSwitcher: FC<PropsType> = ({
  options,
  onChangeCallback,
  className,
  defaultValue,
}) => {
  return (
    <Tabs.Root className={s.root} onValueChange={onChangeCallback} defaultValue={defaultValue}>
      <Tabs.List className={s.list}>
        {options?.map((tab, index) => {
          return (
            <Tabs.Trigger className={`${s.trigger} ${className}`} value={tab.value} key={index}>
              <Typography className={'body1'}>{tab.value}</Typography>
            </Tabs.Trigger>
          )
        })}
      </Tabs.List>
    </Tabs.Root>
  )
}
