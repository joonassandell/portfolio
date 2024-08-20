import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

export interface BoxProps extends PropsWithChildren {
  ['aria-label']?: ComponentPropsWithoutRef<'iframe'>['aria-label'];
  source?: string;
  src?: string;
}
