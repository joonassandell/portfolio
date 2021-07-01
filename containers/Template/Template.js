import { motion, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';

import Title from '../../components/Title';
import c from 'classnames';
import { useAppContext } from '../App';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const variantsWithTransition = {
  animate: {
    y: 0,
  },
  exit: {
    y: '-50vh',
    zIndex: 0,
  },
  initial: {
    y: '100vh',
  },
  transition: { duration: 1.2, ease: [0.76, 0, 0.18, 1] },
};

const variantsWithoutTransition = {
  animate: {
    y: 0,
  },
  exit: {
    y: 0,
  },
  initial: {
    y: 0,
  },
  transition: {
    duration: 0,
  },
};

const Template = ({ children, name, title }) => {
  const [animState, setAnimState] = useState(null);
  const { appState } = useAppContext();
  const { templateTransition } = appState;
  const displayOverlay = animState === 'animExit' && templateTransition;
  const isPresent = useIsPresent();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!isPresent) {
      setAnimState('animExit');
    }

    if (isPresent) {
      setAnimState('animStart');
    }
  }, [isPresent]);

  return (
    <>
      <Title title={title} />
      <motion.div
        className={c('Template', {
          [`Template--${name}`]: name,
          'is-transition:template': templateTransition,
        })}
        {...(templateTransition
          ? { ...variantsWithTransition }
          : { ...variantsWithoutTransition })}
        onAnimationStart={() => {
          if (animState === 'animStart' && templateTransition) {
            console.log('Template transition start:', title);
            if (scroll) scroll.stop();
          }
        }}
      >
        <div className="Template-inner" data-scroll-section>
          {children}
        </div>
        {displayOverlay && (
          <motion.div
            animate={{
              backgroundColor: 'var(--Template-overlayColor)',
            }}
            className="Template-overlay"
            transition={variantsWithTransition.transition}
          />
        )}
      </motion.div>
    </>
  );
};

export default Template;
