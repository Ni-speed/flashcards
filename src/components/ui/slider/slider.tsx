import { ElementRef, FC, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '@/components'

type SliderProps = SliderRadix.SliderProps & {
  multiple?: boolean
  value: number[]
  label: string
}

export const Slider: FC<SliderProps> = forwardRef<ElementRef<typeof SliderRadix.Root>, SliderProps>(
  ({
    label,
    value,
    onValueChange,
    onValueCommit,
    multiple,
    disabled,
    min = 0,
    max = 100,
    step = 1,
  }) => {
    const handleInputChange = (index: number, inputValue: string) => {
      const newValue = [...value]
      const parsedValue = Number(inputValue)

      if (!isNaN(parsedValue) && parsedValue >= min && parsedValue <= max) {
        newValue[index] = parsedValue
        onValueChange!(newValue)
      }
    }

    return (
      <div>
        <Typography variant="body2" className={s.label}>
          {label}
        </Typography>
        <div className={disabled ? s.disabled : s.container}>
          {value.length !== 1 && (
            <input
              type="number"
              value={value[0]}
              onChange={e => handleInputChange(0, e.target.value)}
              className={s.value}
            />
          )}
          <SliderRadix.Root
            className={s.root}
            value={value}
            onValueChange={newValue => onValueChange!(newValue)}
            onValueCommit={onValueCommit}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
          >
            <SliderRadix.Track className={s.track}>
              <SliderRadix.Range className={s.range} />
            </SliderRadix.Track>
            <SliderRadix.Thumb className={s.thumb} />
            {multiple && <SliderRadix.Thumb className={s.thumb} />}
          </SliderRadix.Root>
          <input
            type="number"
            value={value.length === 1 ? value[0] : value[1]}
            onChange={e => handleInputChange(1, e.target.value)}
            className={s.value}
          />
        </div>
      </div>
    )
  }
)
