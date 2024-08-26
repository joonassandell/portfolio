import { type HTMLMotionProps } from 'framer-motion';
import { type TagGeneric, type TagHeading } from '@/types';

export interface HeadingProps extends HTMLMotionProps<TagHeading | TagGeneric> {
  animate?: boolean;
  maxWidth?: boolean;
  size?: TagHeading | 'display';
  tag?: TagHeading | TagGeneric;
}
