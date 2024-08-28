import { AnimatePresence, m, useIsPresent } from 'framer-motion';
import { camelCase } from 'es-toolkit';
import { Footer } from '@/components/Footer';
import {
  OVERLAY_VARIANTS,
  type TemplateProps,
  VARIANTS_WITH_TRANSITION,
  VARIANTS_WITHOUT_TRANSITION,
} from './';
import { useApp } from '@/components/App';
import { useEffect, useRef, useState } from 'react';
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
  const isPresent = useIsPresent();
  const classes = c('Template', `Template--${camelCase(id)}`, className, {
    'Template--default': variant === 'default',
    'is-transition:template:enter': templateTransition,
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
      ref={ref}
      {...(templateTransition && { variants: VARIANTS_WITH_TRANSITION })}
      {...(!templateTransition && { variants: VARIANTS_WITHOUT_TRANSITION })}
    >
      <AnimatePresence>
        <div className="Template-inner">
          <div className="Template-main">{children}</div>
          <Footer {...footerProps} />
        </div>
      </AnimatePresence>
      {displayOverlay && (
        <m.div
          animate="animate"
          className="Template-overlay"
          initial="initial"
          variants={OVERLAY_VARIANTS}
        />
      )}
    </m.div>
  );
};
