import { ArrowDown, ArrowUp } from '../Icon';
import { m, useAnimation, AnimatePresence } from 'framer-motion';
import {
  TRANS_PRIMARY,
  TRANS_PRIMARY_FAST,
  TRANS_PRIMARY_FASTEST,
} from '@/lib/config';
import { useEffect, useState } from 'react';
import c from 'clsx';

export const ButtonArrow = ({
  active = false,
  className,
  hoverStart = false,
  hoverEnd = false,
}) => {
  const [activeAnimation, setActiveAnimation] = useState(false);
  const [activeState, setActive] = useState('start');
  const [closeVisible, setCloseVisible] = useState(false);
  const enableHover = !active && !activeAnimation;
  const bg = useAnimation();
  const arrow = useAnimation();
  const arrowIn = useAnimation();
  const classes = c('Button Button--arrow', className);

  useEffect(() => {
    (async () => {
      if (hoverStart && enableHover) {
        arrowIn.start({
          scaleY: 1,
          transition: TRANS_PRIMARY_FAST,
          y: 0,
        });
        bg.start({
          transition: TRANS_PRIMARY_FAST,
          y: 0,
        });
        arrow.start({
          transition: { ...TRANS_PRIMARY_FASTEST, delay: 0.1 },
          y: '3rem',
        });
      }

      if (hoverEnd && enableHover) {
        bg.start({
          transition: TRANS_PRIMARY_FAST,
          y: '77%',
        });
        arrow.start({
          transition: TRANS_PRIMARY_FAST,
          y: 0,
        });
        await arrowIn.start({
          transition: TRANS_PRIMARY_FAST,
          y: '3rem',
        });
        arrowIn.set({
          scaleY: 6,
          y: '-5rem',
        });
      }

      if (active && activeState == 'start') {
        setActiveAnimation(true);
        setCloseVisible(true);
        arrow.start({
          transition: TRANS_PRIMARY_FAST,
          scaleY: 6,
          y: '5rem',
        });
        bg.start({
          transition: TRANS_PRIMARY_FAST,
          y: 0,
        });
        arrowIn.start({
          transition: TRANS_PRIMARY_FAST,
          y: '3rem',
        });
        setActive('end');
      }

      if (!active && activeState == 'end') {
        setCloseVisible(false);
        bg.start({
          transition: { ...TRANS_PRIMARY, delay: 0.6 },
          y: '77%',
        });
        arrow.start({
          transition: { ...TRANS_PRIMARY_FAST, delay: 1 },
          scaleY: 1,
          y: 0,
        });
        setActive('start');
      }
    })();
  }, [active, enableHover, activeState, hoverEnd, hoverStart]);

  useEffect(() => {
    arrowIn.set({
      scaleY: 6,
      y: '-5rem',
    });
    bg.set({ y: '77%' });
  }, []);

  return (
    <div className={classes}>
      <m.span animate={arrowIn} className="Button-icon Button-icon--in" hidden>
        <ArrowDown />
      </m.span>
      <AnimatePresence onExitComplete={() => setActiveAnimation(false)}>
        {closeVisible && (
          <m.span
            animate={{
              scaleY: 1,
              transition: TRANS_PRIMARY_FAST,
              y: 0,
            }}
            exit={{
              scaleY: 6,
              transition: { ...TRANS_PRIMARY_FAST, delay: 0.5 },
              y: '-5rem',
            }}
            initial={{
              scaleY: 6,
              y: '-5rem',
            }}
            className="Button-icon Button-icon--close"
          >
            <ArrowUp />
          </m.span>
        )}
      </AnimatePresence>
      <m.span animate={arrow} className="Button-icon">
        <ArrowDown />
      </m.span>
      <m.span animate={bg} className="Button-bg" />
    </div>
  );
};
