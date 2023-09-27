import { FC } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { Typography } from '@/components'

type CheckboxType = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
}
export const Checkbox: FC<CheckboxType> = ({
  checked,
  onChange,
  disabled,
  id,
  label,
  required,
}) => {
  return (
    <div className={`${s.container} `}>
      <RadixCheckbox.Root
        className={`${s.root} ${disabled && s.disabled}`}
        checked={checked}
        disabled={disabled}
        required={required}
        onCheckedChange={onChange}
        id={id}
      >
        {checked && <RadixCheckbox.Indicator className={s.indicator}></RadixCheckbox.Indicator>}
      </RadixCheckbox.Root>

      <Typography as="label" variant="body2" className={`${s.label} ${disabled && s.disabled}`}>
        {label}
      </Typography>
    </div>
  )
}
