import { motion, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Title } from '@/components/Title';
import {
  overlayVariants,
  variantsWithTransition,
  variantsWithoutTransition,
} from './Template.animations';
import c from 'classnames';
import { useAppContext } from '@/components/App';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Footer } from '@/components/Footer';

export const Template = ({ children, name, title }) => {
  const [animState, setAnimState] = useState(null);
  const { appState } = useAppContext();
  const { transition } = appState;
  const templateTransition = transition === 'template';
  const displayOverlay = animState === 'animExit' && templateTransition;
  const defaultTransition = transition && !templateTransition;
  const isPresent = useIsPresent();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!isPresent) setAnimState('animExit');
    if (isPresent) setAnimState('animStart');
  }, [isPresent]);

  return (
    <>
      <Title title={title} />
      <motion.div
        animate="animate"
        className={c('Template', {
          [`Template--${name}`]: name,
          'is-transition:exit': defaultTransition && animState === 'animExit',
          'is-transition:template': templateTransition,
          'is-transition:template:exit':
            templateTransition && animState === 'animExit',
        })}
        exit="exit"
        initial="initial"
        onAnimationStart={() => {
          if (animState === 'animStart' && templateTransition) {
            console.log('Template transition start:', title);
            if (scroll) scroll.stop();
          }
        }}
        {...(!templateTransition && {
          variants: variantsWithoutTransition,
          transition: variantsWithoutTransition.transition,
        })}
        {...(templateTransition && {
          variants: variantsWithTransition,
          transition: variantsWithTransition.transition,
        })}
      >
        <div className="Template-inner" data-scroll-section>
          {children}
          <Footer />
        </div>
        {displayOverlay && (
          <motion.div
            animate="animate"
            className="Template-overlay"
            initial="initial"
            variants={overlayVariants}
          />
        )}
      </motion.div>
    </>
  );
};
