import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import { type HTMLMotionProps } from 'motion/react'

export interface QuoteProps extends HTMLMotionProps<'blockquote'> {
  animate?: boolean
  children: ReactNode
  size?: 'm' | 'l'
}

export interface QuoteTextProps extends PropsWithChildren {
  className?: string
}

export interface QuoteFooterProps extends ComponentPropsWithoutRef<'footer'> {}
