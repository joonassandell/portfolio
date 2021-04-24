import { motion, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';

import Title from '../../components/Title';
import c from 'classnames';
import { transPrimary } from '../../lib/config';
import { useAppContext } from '../App';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const variantsWithTransition = {
  animate: {
    position: 'relative',
    y: 0,
    zIndex: 1,
  },
  exit: {
    position: 'fixed',
    y: '-50vh',
    zIndex: 0,
  },
  initial: {
    y: '100vh',
  },
  transition: transPrimary,
};

const variantsWithoutTransition = {
  animate: {
    position: 'relative',
    y: 0,
  },
  exit: {
    position: 'fixed',
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
          [`is-animating`]: templateTransition,
        })}
        onAnimationStart={() => {
          if (animState === 'animStart' && templateTransition) {
            if (scroll) {
              scroll.stop();
            }
          }
        }}
        {...(templateTransition
          ? { ...variantsWithTransition }
          : { ...variantsWithoutTransition })}
      >
        <div data-scroll-section>{children}</div>
        {displayOverlay && (
          <motion.div
            exit={{
              backgroundColor: 'var(--Template-overlayColor)',
              transition: transPrimary,
            }}
            className="Template-overlay"
          />
        )}
      </motion.div>
    </>
  );
};

export default Template;
