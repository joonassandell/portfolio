import { type TagGeneric, type TagAction } from '@/types';
import { type HTMLMotionProps } from 'framer-motion';

export interface LinkRollProps extends HTMLMotionProps<'a'> {
  children: string;
  className?: string;
  href: URL['href'];
  tag?: TagAction | TagGeneric;
  templateTransition?: boolean;
  underline?: boolean;
}
