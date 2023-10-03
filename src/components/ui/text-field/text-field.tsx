import {
  KeyboardEvent,
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  useState,
} from 'react'

import s from './text-field.module.scss'

import { CloseOutline, EyeOffOutline, EyeOutline, SearchOutline } from '@/assets'
import { Typography } from '@/components'

export type TextFieldProps = {
  error?: string
  label?: string
  search?: boolean
  className?: string
  onClearClick?: () => void
  errorMessage?: string
  onChangeValue?: (value: string) => void
  onLeftIconClickHandler?: () => void
  onRightIconClickHandler?: () => void
  onEnter?: ComponentPropsWithoutRef<'input'>['onKeyDown']
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    search = false,
    label,
    disabled,
    type,
    error,
    onClearClick,
    onChange,
    onChangeValue,
    onLeftIconClickHandler,
    onRightIconClickHandler,
    onKeyDown,
    onEnter,
    errorMessage,
    ...rest
  } = props

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const isShowPasswordButton = type === 'password' && !search

  const isShowClearButton =
    onClearClick && typeof rest?.value === 'string' && rest?.value?.length > 0 && search

  const finalType = getFinalType(search, type, showPassword)
  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onEnter?.(e)
    }
    onKeyDown?.(e)
  }

  return (
    <div className={s.root}>
      <Typography variant={'body2'} as={'label'} className={`${s.label} ${disabled && s.disabled}`}>
        {label}
      </Typography>
      <div
        className={`${s.inputContainer} ${errorMessage ? s.error : ''} ${disabled && s.disabled}`}
      >
        {search && (
          <span className={s.icon}>
            <SearchOutline />
          </span>
        )}

        <input
          ref={ref}
          className={`${s.input} ${error ? s.error : ''}`}
          type={finalType}
          disabled={disabled}
          onKeyDown={onKeyPressHandler}
          onChange={onChangeValueHandler}
          {...rest}
        />
        {isShowPasswordButton && (
          <button
            className={s.icon}
            type={'button'}
            onClick={() => setShowPassword(prev => !prev)}
            disabled={disabled}
          >
            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
          </button>
        )}
        {isShowClearButton && (
          <button className={s.icon} type={'button'} onClick={onClearClick} disabled={disabled}>
            <CloseOutline />
          </button>
        )}
      </div>
      <Typography variant={'caption'} as={'div'} className={s.error}>
        {errorMessage}
      </Typography>
    </div>
  )
})

function getFinalType(
  search: boolean | undefined,
  type: ComponentProps<'input'>['type'],
  showPassword: boolean
) {
  if (type === 'password' && showPassword && !search) {
    return 'text'
  }

  return type
}
