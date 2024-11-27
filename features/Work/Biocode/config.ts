import { HEADING_VARIANTS as headingVars } from '@/components/Hero'
import { TRANS_PRIMARY } from '@/lib/config'
import { type Variants } from 'motion/react'

export const HEADING_VARIANTS: Readonly<Variants> = {
  animate: {
    ...headingVars.animate,
    color: 'var(--biocode-heading)',
    y: '-175%',
  },
}

export const MASK_VARIANTS: Readonly<Variants> = {
  animate: {
    clipPath: `circle(150% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    transition: TRANS_PRIMARY,
  },
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return {}
    return {
      clipPath: `circle(0% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    }
  },
}
