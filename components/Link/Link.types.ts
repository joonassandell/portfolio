import { type HTMLMotionProps } from 'motion/react'
import { type ReactNode } from 'react'
import { type ScrollToOptions } from '@/lib/useScrollTo'
import { type TagAction, type TagGeneric } from '@/types'

export interface LinkProps extends HTMLMotionProps<'a'> {
  href: URL['href']
  icon?: ReactNode
  scrollTo?: ScrollToOptions
  tag?: TagAction | TagGeneric
  templateTransition?: boolean
  truncate?: boolean
  underline?: boolean | 'active'
}
