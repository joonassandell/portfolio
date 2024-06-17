import { ComponentPropsWithoutRef } from 'react';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  className?: string;
  size?: 's' | 'm' | 'l';
}
