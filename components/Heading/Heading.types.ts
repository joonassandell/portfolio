import { type HTMLMotionProps } from 'framer-motion';
import { type TagGeneric, type TagHeading } from '@/types';

export interface HeadingProps extends HTMLMotionProps<TagHeading | TagGeneric> {
  size?: TagHeading | 'display';
  tag?: TagHeading | TagGeneric;
}
