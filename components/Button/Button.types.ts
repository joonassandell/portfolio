import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { type HTMLMotionProps } from 'framer-motion';

export interface ButtonBaseProps extends ComponentPropsWithoutRef<'a'> {
  icon?: ReactNode;
  templateTransition?: boolean;
}

export type ButtonProps = ButtonBaseProps &
  ComponentPropsWithoutRef<'a'> &
  ComponentPropsWithoutRef<'button'>;

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
