import { type HTMLMotionProps } from 'framer-motion';
import { type TagAction, type TagGeneric } from '@/types';

export interface LinkProps extends HTMLMotionProps<'a'> {
  arrow?: boolean;
  href: URL['href'];
  orientation?: 'horizontal' | 'vertical';
  tag?: TagAction | TagGeneric;
  templateTransition?: boolean;
  underline?: boolean;
}
