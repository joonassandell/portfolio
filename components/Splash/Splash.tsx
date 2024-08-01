import { AnimatePresence, m } from 'framer-motion';
import { Heading } from '@/components/Heading';
import { type SplashProps, splashVariants, textVariants } from './';
import { Text } from '@/components/Text';

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
          variants={splashVariants}
        >
          <div className="Splash-main">
            <Heading className="Splash-row mb:2xs" size="h6" tag="div">
              <m.div
                className="Splash-text"
                exit="exit"
                variants={textVariants}
              >
                Portfolio of
              </m.div>
            </Heading>
            <Heading className="Splash-row mb:m" size="h3" tag="div">
              <m.div
                className="Splash-text"
                exit="exit"
                variants={textVariants}
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
