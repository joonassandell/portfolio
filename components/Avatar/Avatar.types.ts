import { type ComponentPropsWithoutRef } from 'react';
import { type ImageProps } from 'next/image';

export interface AvatarProps extends ComponentPropsWithoutRef<'div'> {
  image?: ImageProps;
  name?: string;
  text?: string;
}
