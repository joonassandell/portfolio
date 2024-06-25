import { type HTMLMotionProps } from 'framer-motion';
import { type TagGeneric, type TagText } from '@/types';

export interface TextProps extends HTMLMotionProps<'div'> {
  animate?: boolean;
  color?: 'mute' | 'mute:blend' | string;
  marginBottom?: '2xs';
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  tag?: TagText | TagGeneric;
}
