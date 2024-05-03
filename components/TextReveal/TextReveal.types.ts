import { HTMLMotionProps } from 'framer-motion';

export interface TextRevealProps extends HTMLMotionProps<'div'> {
  text: string[];
}
