import { ComponentPropsWithoutRef, FC } from 'react'

export const TableRoot: FC<ComponentPropsWithoutRef<'table'>> = ({ className, ...props }) => {
  return <table className={className} {...props} />
}
export const TableHeader: FC<ComponentPropsWithoutRef<'thead'>> = ({ className, ...props }) => {
  return <thead className={className} {...props} />
}
export const TableRow: FC<ComponentPropsWithoutRef<'tr'>> = ({ className, ...props }) => {
  return <tr className={className} {...props} />
}
export const TableCell: FC<ComponentPropsWithoutRef<'th'>> = ({ className, ...props }) => {
  return <th className={className} {...props} />
}
export const TableBody: FC<ComponentPropsWithoutRef<'tbody'>> = ({ className, ...props }) => {
  return <tbody className={className} {...props} />
}
export const Table = () => {
  return (
    <TableRoot>
      <TableHeader>
        <TableRow>
          <TableCell>Question</TableCell>
          <TableCell>Answer</TableCell>
          <TableCell>Last Updated</TableCell>
          <TableCell>Grade</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>How This works in JavaScript?</TableCell>
          <TableCell>This is how This works in JavaScript</TableCell>
          <TableCell>18.03.2021</TableCell>
          <TableCell>
            <Grade />
          </TableCell>
        </TableRow>
      </TableBody>
    </TableRoot>
  )
}
