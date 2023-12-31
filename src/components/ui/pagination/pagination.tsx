import { FC, forwardRef } from 'react'

import Left from '../../../assets/icons/arrow-left.tsx'
import Right from '../../../assets/icons/arrow-right.tsx'

import s from './pagination.module.scss'
import { usePagination } from './usePagination.ts'

import { Select, Typography } from '@/components'

export type PaginationProps = {
  count: number
  siblings?: number
  page: number
  onChange: (pageNumber: number) => void
  perPage?: string
  perPageOptions?: number[]
  onPerPageChange?: (itemPerPage: string) => void
}
export const Pagination: FC<PaginationProps> = forwardRef<HTMLDivElement, PaginationProps>(
  ({ page, count, siblings, onChange, perPage, perPageOptions, onPerPageChange }) => {
    const {
      paginationRange,
      isFirstPage,
      isLastPage,
      handleMainPageClicked,
      handleNextPageClicked,
      handlePreviousPageClicked,
    } = usePagination({ page, count, siblings, onChange })

    const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

    return (
      <div className={s.root}>
        <div className={s.container}>
          <button className={s.item} disabled={isFirstPage} onClick={handlePreviousPageClicked}>
            <span className={s.icon}>
              <Left />
            </span>
          </button>

          {paginationRange.map((el: number | string, index) => {
            if (typeof el !== 'number') {
              return (
                <span className={s.dots} key={index}>
                  &#8230;
                </span>
              )
            }

            return (
              <button
                key={index}
                onClick={handleMainPageClicked(el)}
                className={`${s.item} ${el === page && s.selected}`}
                disabled={el === page}
              >
                {el}
              </button>
            )
          })}

          <button className={s.item} disabled={isLastPage} onClick={handleNextPageClicked}>
            <span className={s.icon}>
              <Right />
            </span>
          </button>
        </div>
        {showPerPageSelect && (
          <div className={s.selectBox}>
            <Typography variant={'body2'} as={'span'}>
              show
            </Typography>
            <Select
              value={perPage}
              onValueChange={onPerPageChange}
              options={perPageOptions?.map(el => ({ label: `${el}`, value: `${el}` }))}
            />
            <Typography variant={'body2'} as={'span'}>
              per page
            </Typography>
          </div>
        )}
      </div>
    )
  }
)
