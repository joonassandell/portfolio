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
import Footer from '@/containers/Footer';
import { extraDelay } from '@/lib/config';

const extraDelayWithDelay = (extraDelay + 0.3) * 1000;

const Delayed = ({ children, waitBeforeShow = extraDelay }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

const Template = ({ children, name, title }) => {
  const [animState, setAnimState] = useState(null);
  const { appState } = useAppContext();
  const { transition, loading } = appState;
  const templateTransition = transition === 'template';
  const displayOverlay = animState === 'animExit' && templateTransition;
  const defaultTransition = transition && !templateTransition;
  const isPresent = useIsPresent();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!isPresent) setAnimState('animExit');

    if (isPresent) {
      setAnimState('animStart');

      if (scroll && !templateTransition) {
        scroll.destroy();
        scroll.init();
      }
    }
  }, [isPresent, templateTransition]);

  return (
    <>
      <Title title={title} />
      <Delayed waitBeforeShow={defaultTransition ? extraDelayWithDelay : 0}>
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
          key={name}
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
          {...(!loading && { initial: 'initial' })}
        >
          <div className="Template-inner" data-scroll-section>
            {children}
            <Footer />
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
      </Delayed>
    </>
  );
};

export default Template;
