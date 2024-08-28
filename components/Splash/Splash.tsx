import { AnimatePresence, m } from 'framer-motion';
import { Heading } from '@/components/Heading';
import { SPLASH_VARIANTS, type SplashProps, TEXT_VARIANTS } from './';

export const Splash = ({ loading, onAnimationComplete }: SplashProps) => {
  return (
    <AnimatePresence>
      {loading && (
        <m.div
          aria-hidden="true"
          className="Splash"
          exit="exit"
          initial="initial"
          onAnimationComplete={onAnimationComplete}
          variants={SPLASH_VARIANTS}
        >
          <div className="Splash-main">
            <Heading className="Splash-row mb:2xs" size="h6" tag="div">
              <m.div
                className="Splash-text"
                exit="exit"
                variants={TEXT_VARIANTS}
              >
                Portfolio of
              </m.div>
            </Heading>
            <Heading className="Splash-row mb:m" size="h3" tag="div">
              <m.div
                className="Splash-text"
                exit="exit"
                variants={TEXT_VARIANTS}
              >
                Joonas Sandell
              </m.div>
            </Heading>
            <div className="Splash-loader" />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
