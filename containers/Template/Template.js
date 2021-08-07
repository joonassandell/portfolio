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
  const { transition } = appState;
  const templateTransition = transition === 'template';
  const displayOverlay = animState === 'animExit' && templateTransition;
  const isPresent = useIsPresent();
  const { scroll } = useLocomotiveScroll();
  const [key, setKey] = useState(0);
  const [variants, setVariants] = useState(variantsWithoutTransition);

  useEffect(() => {
    if (!isPresent) {
      setAnimState('animExit');
    }

    if (isPresent) {
      setAnimState('animStart');
      if (!appState.loading) setKey(prevKey => prevKey + 1);

      if (scroll && !templateTransition) {
        scroll.destroy();
        scroll.init();
      }
    }
  }, [isPresent]);

  useEffect(() => {
    if (templateTransition) {
      setVariants(variantsWithTransition);
    } else {
      setVariants(variantsWithoutTransition);
    }
  }, [templateTransition]);

  return (
    <>
      <Title title={title} />
      <motion.div
        animate="animate"
        className={c('Template', {
          [`Template--${name}`]: name,
          'is-transition:exit':
            transition && !templateTransition && animState === 'animExit',
          'is-transition:template': templateTransition,
          'is-transition:template:exit':
            templateTransition && animState === 'animExit',
        })}
        exit="exit"
        initial="initial"
        key={`${name}-${key}`}
        onAnimationStart={() => {
          if (animState === 'animStart' && templateTransition) {
            console.log('Template transition start:', title);
            if (scroll) scroll.stop();
          }
        }}
        transition={variants.transition}
        variants={variants}
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
