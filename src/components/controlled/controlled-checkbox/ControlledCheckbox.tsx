import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CheckBox, CheckboxType } from '@/components'

export type ControlledCheckboxProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'name'
> &
  Omit<CheckboxType, 'checked' | 'onValueChange'>
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <CheckBox {...rest} checked={value} onValueChange={onChange} id={name} />
}
