import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '@/containers/App';
import { splashVariants, textVariants } from './Splash.animations';

const Splash = () => {
  const {
    appState: { loading },
    setLoadingEnd,
  } = useAppContext();

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
            {/* <header className="Splash-logo">Joonas Sandell</header> */}
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

export default Splash;
