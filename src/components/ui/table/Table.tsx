import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

const Table = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    return <table ref={ref} className={className} {...restProps} />
  }
)

const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    return <thead ref={ref} className={className} {...restProps} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    return <tbody ref={ref} className={className} {...restProps} />
  }
)

const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    return <tr ref={ref} className={className} {...restProps} />
  }
)

const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    return <th ref={ref} className={className} {...restProps} />
  }
)

const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    return <td ref={ref} className={className} {...restProps} />
  }
)
//
// const Empty = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
//   ({ className, ...restProps }, ref): JSX.Element => {
//     const classNames = {
//       root: cn(s.empty, className),
//       emptyDescription: s.emptyDescription,
//     }
//     const emptyClasses = cn(s.empty, className)
//
//     return (
//       <div ref={ref} className={emptyClasses} {...restProps}>
//         <Typography className={classNames.emptyDescription} variant={'body1'}>
//           This pack is empty. Click add new card to fill this pack
//         </Typography>
//       </div>
//     )
//   }
// )

export const TableElements = { Table, Head, Body, Row, HeadCell, Cell }
export type TableProps = typeof TableElements
