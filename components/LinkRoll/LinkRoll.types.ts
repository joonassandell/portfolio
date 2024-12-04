import { type HTMLMotionProps } from 'motion/react'
import { type ScrollToOptions } from '@/lib/useScrollTo'
import { type TagAction, type TagGeneric } from '@/types'

export interface LinkRollProps extends HTMLMotionProps<'a'> {
  children: string
  href: URL['href']
  scrollTo?: ScrollToOptions
  tag?: TagAction | TagGeneric
  templateTransition?: boolean
  underline?: boolean | 'active'
}
