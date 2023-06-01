import { AnimatePresence, motion } from 'framer-motion';
import { splashVariants, textVariants } from './Splash.animations';

export const Splash = ({ loading, setLoadingEnd }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          aria-hidden="true"
          className="Splash"
          exit="exit"
          initial="initial"
          onAnimationComplete={() => setLoadingEnd(true)}
          variants={splashVariants}
        >
          <div className="wrap">
            <h1 className="Splash-content">
              <div className="Splash-line Splash-line--subHeading">
                <motion.span className="Splash-text" variants={textVariants}>
                  Portfolio of
                </motion.span>
              </div>
              <div className="Splash-line Splash-line--heading">
                <motion.span className="Splash-text" variants={textVariants}>
                  Joonas Sandell
                </motion.span>
              </div>
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
