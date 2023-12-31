import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Select, SelectProps } from '@/components'

type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectProps, 'value' | 'onValueChange'>

export const ControlledSelect = <T extends FieldValues>({
  name,
  control,
  ...rest
}: ControlledSelectProps<T>): JSX.Element => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <Select {...rest} value={value} onValueChange={onChange} />
}
