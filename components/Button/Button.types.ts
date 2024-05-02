import { HTMLMotionProps } from 'framer-motion';
import { type PropsWithChildren } from 'react';

export interface ButtonArrowProps {
  active?: boolean;
  className?: string;
  hoverStart?: boolean;
  hoverEnd?: boolean;
}

export interface ButtonEnterBaseProps extends PropsWithChildren {
  templateTransition?: boolean;
}

export type ButtonEnterProps = ButtonEnterBaseProps &
  HTMLMotionProps<'a'> &
  HTMLMotionProps<'button'>;
