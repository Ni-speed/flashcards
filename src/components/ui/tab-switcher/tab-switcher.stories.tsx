// import type { Meta, StoryObj } from '@storybook/react'

// import { Typography } from '..'

// import s from './tab-switcher.module.scss'

// import { TabSwitcher, TabSwitcherItem } from '.'

// const meta = {
//   title: 'Components/TabSwitcher',
//   component: TabSwitcher,
//   tags: ['autodocs'],
//   argTypes: {},
// } satisfies Meta<typeof TabSwitcher>

// export default meta
// type Story = StoryObj<typeof meta>

// const onClickHandler1 = () => {
//   alert('onClickHandler1')
// }
// const onClickHandler2 = () => {
//   alert('onClickHandler2')
// }

// export const Default: Story = {
//   args: {
//     label: 'Show packs cards',
//     children: (
//       <>
//         <TabSwitcherItem value={'tab1'} onClick={onClickHandler1} className={s.tabsTrigger}>
//           <Typography variant="body1">Account</Typography>
//         </TabSwitcherItem>
//         <TabSwitcherItem value={'tab2'} onClick={onClickHandler2} className={s.tabsTrigger}>
//           <Typography variant="body1">Password</Typography>
//         </TabSwitcherItem>
//       </>
//     ),
//   },
// }

import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '.'

const meta = {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
  argTypes: { onChangeCallback: { action: 'tabSwitcher changes' } },
} satisfies Meta<typeof TabSwitcher>

const tabsName = [
  { name: 'Switcher', value: 'Button1', isDisabled: false },
  { name: 'Switcher', value: 'Button2', isDisabled: false },
  { name: 'Switcher', value: 'Button3', isDisabled: true },
]

export default meta
type Story = StoryObj<typeof meta>

export const ShowTabSwitcher: Story = {
  args: {
    options: tabsName,
  },
}
