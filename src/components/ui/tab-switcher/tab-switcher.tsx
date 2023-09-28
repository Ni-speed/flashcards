// import { FC, ReactNode } from 'react'

// import * as Tabs from '@radix-ui/react-tabs'
// import { TabsTriggerProps } from '@radix-ui/react-tabs'

// import s from './tab-switcher.module.scss'

// import { Typography } from '@/components'

// type TabSwitcherProps = {
//   label: string
//   children: ReactNode
// }

// export const TabSwitcher: FC<TabSwitcherProps> = ({ label, children }) => {
//   return (
//     <div>
//       <Typography variant="body2" className={s.label}>
//         {label}
//       </Typography>
//       <Tabs.Root className={s.tabsRoot} defaultValue="tab2">
//         <Tabs.List className={s.tabsList}>{children}</Tabs.List>
//       </Tabs.Root>
//     </div>
//   )
// }

// export const TabSwitcherItem: FC<TabsTriggerProps> = props => {
//   return <Tabs.Trigger {...props} />
// }
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
