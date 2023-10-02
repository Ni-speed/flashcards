import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from '@/components'

const meta = {
  title: 'Components/Checkbox',
  component: CheckBox,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Disabled: Story = {
  args: {
    label: 'Click here',
    checked: true,
    disabled: true,
  },
}
export const WithoutLabel: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}
const CheckboxWithHook = () => {
  const [checked, setChecked] = useState(false)

  return <CheckBox checked={checked} onValueChange={setChecked} label="Click here" />
}

export const Controlled = {
  render: () => <CheckboxWithHook />,
}
