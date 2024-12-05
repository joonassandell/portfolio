import { AnimatePresence, m } from 'motion/react'
import { Heading } from '@/components/Heading'
import { SPLASH_VARIANTS, type SplashProps } from './'

export const Splash = ({ loading, onAnimationComplete }: SplashProps) => {
  return (
    <AnimatePresence>
      {loading && (
        <m.div
          aria-hidden
          className="Splash"
          exit="exit"
          initial="initial"
          onAnimationComplete={onAnimationComplete}
          variants={SPLASH_VARIANTS}
        >
          <div className="Splash-main">
            <Heading className="Splash-row mb:2xs" size="h6" tag="div">
              <div className="Splash-text">Portfolio of</div>
            </Heading>
            <Heading className="Splash-row mb:m" size="h3" tag="div">
              <div className="Splash-text">Joonas Sandell</div>
            </Heading>
            <div className="Splash-loader" />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
