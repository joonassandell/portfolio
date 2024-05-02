import { AnimatePresence, m } from 'framer-motion';
import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';
import { type SplashProps, splashVariants, textVariants } from './';

export const Splash = ({ loading, setLoadingEnd }: SplashProps) => {
  return (
    <AnimatePresence>
      {loading && (
        <m.div
          aria-hidden="true"
          className="Splash"
          exit="exit"
          initial="initial"
          onAnimationComplete={() => setLoadingEnd(true)}
          variants={splashVariants}
        >
          <div className="Splash-main">
            <Text className="Splash-row" size="xl">
              <m.div className="Splash-text" variants={textVariants}>
                Portfolio of
              </m.div>
            </Text>
            <Heading className="Splash-row" size="h3" tag="div">
              <m.div className="Splash-text" variants={textVariants}>
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
