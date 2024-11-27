import { type HTMLMotionProps } from 'motion/react'
import { type RefObject } from 'react'

export interface StampProps {
  addVarsToParent?: boolean
  className?: string
  href?: URL['href']
  onClick: HTMLMotionProps<'a'>['onClick']
  overlay: boolean
  parentRef: RefObject<Element>
  transitionStart?: boolean
}
