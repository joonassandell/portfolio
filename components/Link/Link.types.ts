import { type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';
import { type TagAction, type TagGeneric } from '@/types';

export interface LinkProps extends HTMLMotionProps<'a'> {
  href: URL['href'];
  icon?: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  tag?: TagAction | TagGeneric;
  templateTransition?: boolean;
  truncate?: boolean;
  underline?: boolean;
}
