import { type HTMLMotionProps } from 'motion/react';
import { type ReactNode } from 'react';

export interface TextRevealProps extends HTMLMotionProps<'div'> {
  animate?: boolean;
  text: ReactNode[];
}
