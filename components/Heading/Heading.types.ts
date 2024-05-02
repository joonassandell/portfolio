import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';
import { TagHeading, TagGeneric } from '@/types';

export interface HeadingProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'h1'> {
  size?: TagHeading | 'display';
  tag?: TagHeading | TagGeneric;
}
