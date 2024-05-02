import { HTMLMotionProps } from 'framer-motion';

export interface LinkProps extends HTMLMotionProps<'a'> {
  arrow?: boolean;
  orientation?: 'horizontal' | 'vertical';
  tag?: 'span' | 'a';
  templateTransition?: boolean;
  underline?: boolean;
}
