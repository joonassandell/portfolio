import { type ComponentPropsWithoutRef } from 'react';

export interface SomeIconsProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {}
