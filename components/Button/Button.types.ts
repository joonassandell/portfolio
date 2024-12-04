import {
  type ComponentPropsWithoutRef,
  type JSX,
  type PropsWithChildren,
} from 'react'
import { type HTMLMotionProps } from 'motion/react'
import { type ScrollToOptions } from '@/lib/useScrollTo'

export interface ButtonBaseProps extends ComponentPropsWithoutRef<'a'> {
  icon?: JSX.Element
  radius?: 'm' | 'full'
  scrollTo?: ScrollToOptions
  size?: 's' | 'm' | 'square:s' | 'square'
  templateTransition?: boolean
  variant?: 'default' | 'primary' | 'secondary'
}

export type ButtonProps = ButtonBaseProps &
  ComponentPropsWithoutRef<'a'> &
  ComponentPropsWithoutRef<'button'>

export interface ButtonEnterBaseProps extends PropsWithChildren {
  templateTransition?: boolean
}

export type ButtonEnterProps = ButtonEnterBaseProps &
  HTMLMotionProps<'a'> &
  HTMLMotionProps<'button'>
