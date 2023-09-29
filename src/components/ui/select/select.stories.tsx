import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Select } from '.'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Uncontrolled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Select-box',
    options: [
      { label: 'Item1', value: 'Box1' },
      { label: 'Item2', value: 'Box2' },
      { label: 'Item3', value: 'Box3' },
      { label: 'Item4', value: 'Box4' },
      { label: 'Item5', value: 'Box5' },
    ],
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select-box',
    label: 'Select-box',
    options: [
      { label: 'Item1', value: 'Box1' },
      { label: 'Item2', value: 'Box2' },
      { label: 'Item3', value: 'Box3' },
      { label: 'Item4', value: 'Box4' },
      { label: 'Item5', value: 'Box5' },
    ],
  },
}

const SelectWithHook = () => {
  const [value, setValue] = useState<string>('item-1')

  return (
    <Select
      required={true}
      label={'Select-box'}
      options={[
        { label: 'Item1', value: 'Box1' },
        { label: 'Item2', value: 'Box2' },
        { label: 'Item3', value: 'Box3' },
        { label: 'Item4', value: 'Box4' },
        { label: 'Item5', value: 'Box5' },
      ]}
      value={value}
      onValueChange={setValue}
    />
  )
}

export const Controlled = {
  render: () => <SelectWithHook />,
}
