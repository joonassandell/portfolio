import { type HTMLMotionProps } from 'motion/react'
import { type RefObject } from 'react'

export interface StampProps {
  addVarsToParent?: boolean
  ['aria-label']?: HTMLMotionProps<'a'>['aria-label']
  className?: string
  href?: URL['href']
  onClick: HTMLMotionProps<'a'>['onClick']
  overlay: boolean
  parentRef: RefObject<HTMLElement | null>
  transitionStart?: boolean
}
