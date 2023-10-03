import type { Meta, StoryObj } from '@storybook/react'

import { Edit } from '@/assets'
import Delete from '@/assets/icons/delete.tsx'
import Play from '@/assets/icons/play.tsx'
import { Dropdown } from '@/components'
import { DropdownItemWithIcon } from '@/components/ui/dropdown/dropdonItem/dropdownItem.tsx'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    trigger: {},
    children: {},
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <DropdownItemWithIcon icon={<Play />} text="Learn" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Delete />} text="Edit" onSelect={() => {}} />
      </div>
    ),
  },
}
