import { type ComponentPropsWithoutRef } from 'react';
import { type HTMLMotionProps } from 'motion/react';

export interface TableProps extends ComponentPropsWithoutRef<'table'> {}

export interface TableHeaderProps extends ComponentPropsWithoutRef<'thead'> {}

export interface TableHeadProps extends ComponentPropsWithoutRef<'th'> {}

export interface TableBodyProps extends ComponentPropsWithoutRef<'tbody'> {}

export interface TableRowProps extends HTMLMotionProps<'tr'> {
  animate?: boolean;
  background?: string;
  href?: URL['href'];
}

export interface TableCellProps extends ComponentPropsWithoutRef<'td'> {}

export interface TableFooterProps extends ComponentPropsWithoutRef<'tfoot'> {}

export interface TableCaptionProps extends HTMLMotionProps<'caption'> {
  animate?: boolean;
  hideVisually?: boolean;
}
