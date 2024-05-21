import { type ComponentPropsWithoutRef } from 'react';

export interface TableProps extends ComponentPropsWithoutRef<'table'> {}

export interface TableHeaderProps extends ComponentPropsWithoutRef<'thead'> {}

export interface TableHeadProps extends ComponentPropsWithoutRef<'th'> {}

export interface TableBodyProps extends ComponentPropsWithoutRef<'tbody'> {}

export interface TableRowProps extends ComponentPropsWithoutRef<'tr'> {
  background?: string;
  href?: URL['href'];
}

export interface TableCellProps extends ComponentPropsWithoutRef<'td'> {}

export interface TableFooterProps extends ComponentPropsWithoutRef<'tfoot'> {}

export interface TableCaptionProps extends ComponentPropsWithoutRef<'caption'> {
  hideVisually?: boolean;
}
