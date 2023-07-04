import { AnimatePresence, m } from 'framer-motion';
import { splashVariants, textVariants } from './Splash.animations';
import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';

export const Splash = ({ loading, setLoadingEnd }) => {
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
            <Text className="Splash-row" size="xLarge">
              <m.div className="Splash-text" variants={textVariants}>
                Portfolio of
              </m.div>
            </Text>
            <Heading className="Splash-row" size="h3" tag="div">
              <m.div className="Splash-text" variants={textVariants}>
                Joonas Sandell
              </m.div>
            </Heading>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
