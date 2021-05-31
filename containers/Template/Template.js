import { motion, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';

import Title from '../../components/Title';
import c from 'classnames';
import { transPrimary } from '../../lib/config';
import { useAppContext } from '../App';

const variantsWithTransition = {
  animate: {
    position: 'fixed',
    y: 0,
    zIndex: 1,
    transitionEnd: {
      position: 'relative',
    },
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
    position: 'relative',
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

  useEffect(() => {
    if (!isPresent) {
      setAnimState('animExit');
    }
  }, [isPresent]);

  return (
    <>
      <Title title={title} />
      <motion.div
        className={c('Template', {
          [`Template--${name}`]: name,
          'is-animating': templateTransition,
        })}
        {...(templateTransition
          ? { ...variantsWithTransition }
          : { ...variantsWithoutTransition })}
      >
        <div data-scroll-section>{children}</div>
        {displayOverlay && (
          <motion.div
            exit={{
              backgroundColor: 'var(--Template-overlayColor)',
              transition: variantsWithTransition.transition,
            }}
            className="Template-overlay"
          />
        )}
      </motion.div>
    </>
  );
};

export default Template;
