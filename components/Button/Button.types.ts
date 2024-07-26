import {
  type ComponentPropsWithoutRef,
  type JSX,
  type PropsWithChildren,
} from 'react';
import { type HTMLMotionProps } from 'framer-motion';

export interface ButtonBaseProps extends ComponentPropsWithoutRef<'a'> {
  icon?: JSX.Element;
  size?: 's' | 'm' | 's:square' | 'square';
  templateTransition?: boolean;
  variant?: 'default' | 'negative';
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
