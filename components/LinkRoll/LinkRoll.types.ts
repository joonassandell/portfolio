import { type HTMLMotionProps } from 'framer-motion';
import { type TagAction, type TagGeneric } from '@/types';

export interface LinkRollProps extends HTMLMotionProps<'a'> {
  children: string;
  href: URL['href'];
  tag?: TagAction | TagGeneric;
  templateTransition?: boolean;
  underline?: boolean | 'active';
}
