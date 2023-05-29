import StampSvg from './stamp.svg';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import c from 'classnames';
import {
  stampVariants,
  svgVariants,
  overlayVariants,
} from './Stamp.animations';
import { debounce } from 'lodash';
import { useMouse, useMeasure } from 'react-use';
import { useEffect, useRef } from 'react';
import useInView from '@/lib/useInView';

const Stamp = ({
  addVarsToParent = false,
  className,
  color,
  href,
  iris,
  onClick,
  overlay = true,
  overlayBg,
  parentRef,
  transitionStart,
}) => {
  const classes = c(className, 'Stamp');
  const [ref, { width, height }] = useMeasure();
  const contentRef = useRef(null);
  const inView = useInView(contentRef, 0, false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { elX, elY } = useMouse(parentRef);
  const springOpts = {
    damping: 100,
    stiffness: 150,
  };
  const moveX = useSpring(
    useTransform(x, [0, -32, width / 2, width], [0, -32, 0, 32]),
    springOpts,
  );
  const moveY = useSpring(
    useTransform(y, [0, -32, height / 2, height], [0, -32, 0, 32]),
    springOpts,
  );

  const setParentAttributes = () => {
    if (!addVarsToParent) return;
    if (!parentRef || !contentRef) return;
    const { x, y, width, height } = contentRef.current.getBoundingClientRect();
    parentRef.current.setAttribute(
      'style',
      `--Stamp-center-x: ${x + width / 2}px; --Stamp-center-y: ${
        y + height / 2
      }px;`,
    );
  };

  useEffect(() => {
    if (!inView) return;
    x.set(elX);
    y.set(elY);
    setParentAttributes();
  }, [elX, elY, transitionStart]);

  useEffect(() => {
    const resize = debounce(() => setParentAttributes(), 100);
    window.addEventListener('resize', resize);
    setParentAttributes();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={classes}
      ref={ref}
      style={{
        '--Stamp-color': color,
        '--Stamp-iris': iris,
        '--Stamp-overlayBg': overlayBg,
      }}
    >
      <div className="Stamp-inner">
        <motion.div
          className="Stamp-content"
          ref={contentRef}
          style={{
            y: moveY,
            x: moveX,
          }}
        >
          <motion.a
            className="Stamp-stamp"
            href={href}
            onClick={onClick}
            variants={stampVariants}
            whileHover="hover"
            whileTap="tap"
            transition={stampVariants.transition}
          >
            <motion.div
              animate={inView ? 'animate' : ''}
              className="Stamp-svg"
              variants={svgVariants}
            >
              <StampSvg />
            </motion.div>
          </motion.a>
          {transitionStart && overlay && (
            <motion.div
              animate="exit"
              className="Stamp-overlay"
              variants={overlayVariants}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Stamp;
