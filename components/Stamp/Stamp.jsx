import StampSvg from './stamp.svg';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import c from 'classnames';
import {
  stampVariants,
  svgVariants,
  overlayVariants,
} from './Stamp.animations';
import { debounce } from 'lodash-es';
import { useMouse, useMeasure } from 'react-use';
import { useEffect, useRef } from 'react';
import { useInView } from '@/lib/useInView';

export const Stamp = ({
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
  const innerRef = useRef(null);
  const inView = useInView(innerRef, 0, false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { elX: mouseX, elY: mouseY } = useMouse(parentRef);
  const springOpts = {
    damping: 100,
    stiffness: 150,
  };
  const moveX = useSpring(
    useTransform(x, [0, -40, width / 2, width], [0, -40, 0, 40]),
    springOpts,
  );
  const moveY = useSpring(
    useTransform(y, [0, -40, height / 2, height], [0, -40, 0, 40]),
    springOpts,
  );

  const setParentAttributes = (moveX = 0, moveY = 0) => {
    if (!parentRef || !innerRef) return;
    const {
      offsetHeight: height,
      offsetLeft: x,
      offsetTop: y,
      offsetWidth: width,
    } = innerRef.current;
    const posX = `${x + width / 2 + moveX}px`;
    const posY = `${y + height / 2 + moveY}px`;

    parentRef.current.setAttribute(
      'style',
      `--Stamp-center-x: ${posX}; --Stamp-center-y: ${posY};`,
    );
  };

  useEffect(() => {
    if (!inView || transitionStart) return;
    x.set(mouseX);
    y.set(mouseY);
  }, [mouseX, mouseY, inView, transitionStart]);

  useEffect(() => {
    if (!addVarsToParent) return;
    if (!inView || transitionStart) return;
    setParentAttributes(moveX.current, moveY.current);
  }, [moveX.current, moveY.current, inView, transitionStart]);

  useEffect(() => {
    if (!addVarsToParent) return;
    const resize = debounce(
      () => setParentAttributes(moveX.current, moveY.current),
      100,
    );
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [inView]);

  useEffect(() => {
    if (!addVarsToParent) return;
    setParentAttributes();
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
      <m.div
        className="Stamp-inner"
        ref={innerRef}
        style={{
          y: moveY,
          x: moveX,
        }}
      >
        <m.a
          className="Stamp-stamp"
          href={href}
          onClick={onClick}
          variants={stampVariants}
          whileHover="hover"
          whileTap="tap"
          transition={stampVariants.transition}
        >
          <m.div
            animate={inView ? 'animate' : ''}
            className="Stamp-svg"
            variants={svgVariants}
          >
            <StampSvg />
          </m.div>
        </m.a>
        {transitionStart && overlay && (
          <m.div className="Stamp-overlay" variants={overlayVariants} />
        )}
      </m.div>
    </div>
  );
};
