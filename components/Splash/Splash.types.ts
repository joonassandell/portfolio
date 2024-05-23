import { type AnimationLifecycles } from 'framer-motion';

export interface SplashProps {
  loading: boolean;
  onAnimationComplete: AnimationLifecycles['onAnimationComplete'];
}
