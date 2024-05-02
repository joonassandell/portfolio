import { HTMLMotionProps } from 'framer-motion';

export interface TextProps extends HTMLMotionProps<'div'> {
  animate?: boolean;
  color?: string;
  marginBottom?: '2xs';
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  tag?: string;
}
