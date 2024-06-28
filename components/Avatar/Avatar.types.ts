import { type ComponentPropsWithoutRef } from 'react';
import { type FigureProps } from '../Figure';

export interface AvatarProps extends ComponentPropsWithoutRef<'div'> {
  image?: FigureProps;
  name?: string;
  text?: string;
}
