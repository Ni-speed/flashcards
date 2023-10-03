import { useState } from 'react'

import { Meta } from '@storybook/react'

import { RadioGroup } from '.'

import { ControlledTextField } from '@/components/controlled'

const options = [
  {
    value: 'Radio Group1',
    label: 'Radio Group1',
  },
  {
    value: 'Radio Group2',
    label: 'Radio Group2',
  },
  {
    value: 'Radio GaGa',
    label: 'Radio GaGa',
  },
  {
    value: 'Radio Vietnam',
    label: 'Radio Vietnam',
  },
]

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} as Meta<typeof RadioGroup>

export const Default = {
  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <RadioGroup {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </>
    )
  },

  args: {
    options,
    disabled: false,
  },
}

export const Disabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}
