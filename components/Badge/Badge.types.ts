import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

export interface BadgeProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'div'> {
  beacon?: string | boolean;
}
