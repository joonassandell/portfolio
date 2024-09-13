import { type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

export interface TextRevealProps extends HTMLMotionProps<'div'> {
  animate?: boolean;
  text: ReactNode[];
}
