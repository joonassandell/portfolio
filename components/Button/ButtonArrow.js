import { ArrowDown, ArrowUp } from '../Icon';
import { motion, useAnimation } from 'framer-motion';
import {
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
} from '../../lib/config';
import { useEffect, useState } from 'react';

import c from 'classnames';

const ButtonArrow = ({
  active = false,
  hoverStart = false,
  hoverEnd = false,
  innerRef = null,
  ...props
}) => {
  const [arrowInVisible, setArrowInVisible] = useState(false);
  const [closeVisible, setCloseVisible] = useState(false);
  const [activeState, setActive] = useState('start');
  const button = useAnimation();
  const bg = useAnimation();
  const arrow = useAnimation();
  const arrowIn = useAnimation();
  const close = useAnimation();
  const enableHover = !active && activeState === 'start';
  const classes = c(props.className, 'Button Button--arrow');

  useEffect(() => {
    (async () => {
      if (hoverStart && enableHover) {
        setArrowInVisible(true);
        arrowIn.set({
          scaleY: 6,
          y: '-5rem',
        });
        bg.start({
          transition: transPrimaryFast,
          y: 0,
        });
        arrowIn.start({
          scaleY: 1,
          transition: transPrimaryFast,
          y: 0,
        });
        arrow.start({
          transition: { ...transPrimaryFastest, delay: 0.1 },
          y: '3rem',
        });
      }

      if (hoverEnd && enableHover) {
        bg.start({
          transition: transPrimaryFast,
          y: '77%',
        });
        arrow.start({
          transition: transPrimaryFast,
          y: 0,
        });
        await arrowIn.start({
          transition: transPrimaryFast,
          y: '3rem',
        });
        setArrowInVisible(false);
      }

      if (active && activeState == 'start') {
        setCloseVisible(true);
        close.set({
          scaleY: 6,
          y: '-5rem',
        });
        arrow.start({
          transition: transPrimaryFast,
          scaleY: 6,
          y: '5rem',
        });
        arrowIn.start({
          transition: transPrimaryFast,
          y: '3rem',
        });
        bg.start({
          transition: transPrimaryFast,
          y: 0,
        });
        await close.start({
          transition: transPrimaryFast,
          scaleY: 1,
          y: 0,
        });
        setActive('end');
      }

      if (!active && activeState == 'end') {
        bg.start({
          transition: { ...transPrimary, delay: 0.6 },
          y: '77%',
        });
        await close.start({
          transition: { ...transPrimaryFast, delay: 0.5 },
          scaleY: 6,
          y: '-5rem',
        });
        arrow.start({
          transition: transPrimaryFast,
          scaleY: 1,
          y: 0,
        });
        setActive('start');
        setArrowInVisible(false);
        setCloseVisible(false);
      }
    })();
  }, [hoverStart, hoverEnd, active, arrowInVisible, closeVisible]);

  useEffect(() => {
    bg.set({ y: '77%' });
  }, []);

  return (
    <motion.div
      animate={button}
      key={props.key}
      className={classes}
      ref={innerRef}
    >
      {arrowInVisible && (
        <motion.span animate={arrowIn} className="Button-icon Button-icon--in">
          <ArrowDown />
        </motion.span>
      )}
      {closeVisible && (
        <motion.span animate={close} className="Button-icon Button-icon--close">
          <ArrowUp />
        </motion.span>
      )}
      <motion.span animate={arrow} className="Button-icon">
        <ArrowDown />
      </motion.span>
      <motion.span animate={bg} className="Button-bg" />
    </motion.div>
  );
};

export default ButtonArrow;
