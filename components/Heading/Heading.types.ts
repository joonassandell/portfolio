import { ComponentProps, type PropsWithChildren } from 'react';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends PropsWithChildren, ComponentProps<'h1'> {
  size?: HeadingTag | 'display';
  tag?: HeadingTag;
}
