import { type HTMLMotionProps } from 'framer-motion';
import { type TagGeneric, type TagText } from '@/types';

export interface SubtitleProps extends HTMLMotionProps<'div'> {
  animate?: boolean;
  center?: boolean;
  maxWidth?: boolean;
  tag?: TagText | TagGeneric;
}
