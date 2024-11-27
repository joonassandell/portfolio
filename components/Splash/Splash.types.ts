import { type AnimationLifecycles } from 'motion/react'

export interface SplashProps {
  loading: boolean
  onAnimationComplete: AnimationLifecycles['onAnimationComplete']
}
