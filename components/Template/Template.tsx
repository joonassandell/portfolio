import { AnimatePresence, m, useIsPresent } from 'framer-motion';
import { camelCase } from 'lodash-es';
import { Footer } from '@/components/Footer';
import {
  overlayVariants,
  type TemplateProps,
  variantsWithoutTransition,
  variantsWithTransition,
} from './';
import { useApp } from '@/components/App';
import { useEffect, useRef, useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import c from 'clsx';

export const Template = ({
  children,
  className,
  footerProps,
  id,
  variant = 'default',
}: TemplateProps) => {
  const [animState, setAnimState] = useState<'animExit' | 'animStart' | null>(
    null,
  );
  const { setTemplateRef, transition } = useApp();
  const templateTransition = transition === 'template';
  const displayOverlay = animState === 'animExit' && templateTransition;
  const defaultTransition = transition && !templateTransition;
  const isPresent = useIsPresent();
  const lenis = useLenis();
  const classes = c('Template', `Template--${camelCase(id)}`, className, {
    'Template--default': variant === 'default',
    'is-transition:exit': defaultTransition && animState === 'animExit',
    'is-transition:template': templateTransition,
    'is-transition:template:exit':
      templateTransition && animState === 'animExit',
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPresent) setAnimState('animExit');
    if (isPresent) {
      setTemplateRef(ref);
      setAnimState('animStart');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <m.div
      animate="animate"
      className={classes}
      exit="exit"
      initial="initial"
      onAnimationStart={() => {
        if (animState === 'animStart' && templateTransition) {
          console.log('Template transition start:', id);
          lenis?.stop();
        }
      }}
      ref={ref}
      {...(!templateTransition && { variants: variantsWithoutTransition })}
      {...(templateTransition && { variants: variantsWithTransition })}
    >
      <AnimatePresence>
        <div className="Template-inner">
          {children}
          <Footer {...footerProps} />
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
