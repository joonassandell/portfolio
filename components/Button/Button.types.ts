import { type HTMLMotionProps } from 'framer-motion';
import { type PropsWithChildren } from 'react';

export interface ButtonArrowProps {
  active?: boolean;
  className?: string;
  hoverEnd?: boolean;
  hoverStart?: boolean;
}

export interface ButtonEnterBaseProps extends PropsWithChildren {
  templateTransition?: boolean;
}

export type ButtonEnterProps = ButtonEnterBaseProps &
  HTMLMotionProps<'a'> &
  HTMLMotionProps<'button'>;
