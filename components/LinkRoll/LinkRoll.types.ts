import { HTMLMotionProps } from 'framer-motion';

export interface LinkRollProps extends HTMLMotionProps<'a'> {
  children: string;
  className?: string;
  tag?: 'span' | 'a';
  templateTransition?: boolean;
  underline?: boolean;
}
