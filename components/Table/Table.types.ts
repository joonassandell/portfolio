import { type ComponentPropsWithoutRef } from 'react'
import { type HTMLMotionProps } from 'motion/react'

export type TableProps = ComponentPropsWithoutRef<'table'>

export type TableHeaderProps = ComponentPropsWithoutRef<'thead'>

export type TableHeadProps = ComponentPropsWithoutRef<'th'>

export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>

export interface TableRowProps extends HTMLMotionProps<'tr'> {
  animate?: boolean
  background?: string
  href?: URL['href']
}

export type TableCellProps = ComponentPropsWithoutRef<'td'>

export type TableFooterProps = ComponentPropsWithoutRef<'tfoot'>

export interface TableCaptionProps extends HTMLMotionProps<'caption'> {
  animate?: boolean
  hideVisually?: boolean
}
