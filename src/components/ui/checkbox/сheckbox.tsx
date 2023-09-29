import { FC } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import Check from '@/assets/icons/check-box'
import { Typography } from '@/components'

type CheckboxType = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
}
export const Checkbox: FC<CheckboxType> = ({ checked, onChange, disabled, label, required }) => {
  return (
    <Typography variant={'body2'} as={'label'} className={`${s.label} ${disabled && s.disabled}`}>
      <div className={`${s.container} ${disabled && s.disabled}`}>
        <RadixCheckbox.Root
          className={`${s.root} ${disabled && s.disabled}`}
          checked={checked}
          disabled={disabled}
          required={required}
          onCheckedChange={onChange}
        >
          {checked && (
            <RadixCheckbox.Indicator style={{ width: 24, height: 24 }}>
              <Check />
            </RadixCheckbox.Indicator>
          )}
        </RadixCheckbox.Root>
      </div>
      {label}
    </Typography>
  )
}
