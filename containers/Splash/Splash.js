// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { transPrimary } from '@/lib/config';

export const moveOutVariants = {
  hidden: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  },
  visible: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
};

const Splash = () => {
  // const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // router.events.on('routeChangeStart', changeStart);
    // router.events.on('routeChangeError', changeComplete);
    // router.events.on('routeChangeComplete', changeComplete);

    setLoading(false);

    return () => {
      // router.events.off('routeChangeStart', changeStart);
      // router.events.off('routeChangeError', changeComplete);
      // router.events.off('routeChangeComplete', changeComplete);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="Splash"
          exit="hidden"
          initial="visible"
          onAnimationComplete={() => {
            const html = document.querySelector('html');
            html.classList.remove('is-loading');
          }}
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
