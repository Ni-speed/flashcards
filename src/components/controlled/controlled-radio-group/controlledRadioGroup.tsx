import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { RadioGroup, TextFieldProps } from '@/components'

export type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'value' | 'onValueChange'>
export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <RadioGroup {...rest} onValueChange={onChange} value={value} name={name} />
}
