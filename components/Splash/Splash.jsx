import { AnimatePresence, m } from 'framer-motion';
import { splashVariants, textVariants } from './Splash.animations';

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
          <div className="wrap">
            <h1 className="Splash-content">
              <div className="Splash-line Splash-line--subHeading">
                <m.span className="Splash-text" variants={textVariants}>
                  Portfolio of
                </m.span>
              </div>
              <div className="Splash-line Splash-line--heading">
                <m.span className="Splash-text" variants={textVariants}>
                  Joonas Sandell
                </m.span>
              </div>
            </h1>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
