import { ComponentPropsWithoutRef, FC } from 'react'

import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

import { Typography } from '@/components'

type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  options?: Option[]
  value?: string
  onValueChange?: (e: any) => void
  disabled?: boolean
  name?: string
} & ComponentPropsWithoutRef<'div'>
export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  className,
  onValueChange,
  disabled,
}) => {
  return (
    <form>
      <RadixRadioGroup.Root
        className={`${s.radioGroupRoot} ${className}`}
        onValueChange={onValueChange}
      >
        {options?.map((el, index) => {
          return (
            <div className={s.itemGroup} key={index}>
              <RadixRadioGroup.Item
                className={s.radioGroupItem}
                disabled={disabled}
                value={el.value}
              >
                <RadixRadioGroup.Indicator className={s.radioGroupIndicator} />
              </RadixRadioGroup.Item>
              <label className={`${s.label} ${disabled ? s.labelDisabled : ''}`}>
                <Typography variant={'body2'}>{el.value}</Typography>
              </label>
            </div>
          )
        })}
      </RadixRadioGroup.Root>
    </form>
  )
}
