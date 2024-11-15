import { type HTMLMotionProps } from 'motion/react';
import { type TagGeneric, type TagText } from '@/types';

export interface TextProps extends HTMLMotionProps<'div'> {
  animate?: boolean;
  balance?: boolean;
  center?: boolean;
  color?: 'mute' | 'mute:blend' | string;
  maxWidth?: boolean;
  size?: 'l' | 'm' | 's' | 'xs';
  tag?: TagText | TagGeneric;
  truncate?: boolean;
}
