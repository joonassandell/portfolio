import { type HTMLMotionProps } from 'motion/react';
import { type TagGeneric, type TagHeading } from '@/types';

export interface HeadingProps extends HTMLMotionProps<TagHeading | TagGeneric> {
  animate?: boolean;
  center?: boolean;
  maxWidth?: boolean;
  size?: TagHeading | 'xl' | 'l';
  tag?: TagHeading | TagGeneric;
}
