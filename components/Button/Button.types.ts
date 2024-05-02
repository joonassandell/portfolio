import { HTMLMotionProps } from 'framer-motion';
import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

export interface ButtonArrowProps
  extends ComponentPropsWithoutRef<'button'>,
    PropsWithChildren {
  active?: boolean;
  hoverStart?: boolean;
  hoverEnd?: boolean;
}

export interface ButtonEnterBaseProps extends PropsWithChildren {
  templateTransition?: boolean;
}

export type ButtonEnterProps = ButtonEnterBaseProps &
  HTMLMotionProps<'a'> &
  HTMLMotionProps<'button'>;
