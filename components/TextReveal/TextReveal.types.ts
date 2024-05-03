import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

export interface TextRevealProps extends HTMLMotionProps<'div'> {
  text: string[] | ReactNode[];
}
