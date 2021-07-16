import { motion, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';

import Title from '@/components/Title';
import {
  variantsWithTransition,
  variantsWithoutTransition,
} from './Template.animations';
import c from 'classnames';
import { useAppContext } from '@/containers/App';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Template = ({ children, name, title }) => {
  const [animState, setAnimState] = useState(null);
  const { appState } = useAppContext();
  const { templateTransition, transition } = appState;
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
          'is-transition:instant': transition === 'instant',
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
