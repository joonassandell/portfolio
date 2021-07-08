import { AnimatePresence, motion } from 'framer-motion';
import { transPrimary } from '@/lib/config';
import { useAppContext } from '@/containers/App';

export const moveOutVariants = {
  hidden: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  },
  visible: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
};

const Splash = () => {
  const {
    appState: { loading },
    setLoadingEnd,
  } = useAppContext();

  // useEffect(() => {
  //   if (loading) {}

  //   return () => {};
  // }, [, loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="Splash"
          exit="hidden"
          initial="visible"
          onAnimationComplete={() => setLoadingEnd(true)}
          transition={{ ...transPrimary, delay: 0.5 }}
          variants={moveOutVariants}
        >
          <div className="wrap">
            <header className="Splash-logo">Joonas Sandell</header>
            <p className="Splash-content">
              <span>Digital designer </span>
              <span>& Developer</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
