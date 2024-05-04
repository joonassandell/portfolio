import { AnimatePresence, m, useIsPresent } from 'framer-motion';
import { camelCase } from 'lodash-es';
import { Footer } from '@/components/Footer';
import {
  overlayVariants,
  type TemplateProps,
  variantsWithoutTransition,
  variantsWithTransition,
} from './';
import { useAppContext } from '@/components/App';
import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from '@/components/LocomotiveScroll';
import c from 'clsx';

export const Template = ({ children, className, id }: TemplateProps) => {
  const [animState, setAnimState] = useState<'animExit' | 'animStart' | null>(
    null,
  );
  const { transition } = useAppContext();
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
    <m.div
      animate="animate"
      className={c('Template', `Template--${camelCase(id)}`, className, {
        'is-transition:exit': defaultTransition && animState === 'animExit',
        'is-transition:template': templateTransition,
        'is-transition:template:exit':
          templateTransition && animState === 'animExit',
      })}
      exit="exit"
      initial="initial"
      onAnimationStart={() => {
        if (animState === 'animStart' && templateTransition) {
          console.log('Template transition start:', id);
          if (scroll) scroll.stop();
        }
      }}
      {...(!templateTransition && {
        variants: variantsWithoutTransition,
      })}
      {...(templateTransition && {
        variants: variantsWithTransition,
      })}
    >
      <AnimatePresence>
        <div className="Template-inner" data-s-section>
          {children}
          <Footer />
        </div>
      </AnimatePresence>
      {displayOverlay && (
        <m.div
          animate="animate"
          className="Template-overlay"
          initial="initial"
          variants={overlayVariants}
        />
      )}
    </m.div>
  );
};
