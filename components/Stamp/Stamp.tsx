import { debounce } from 'es-toolkit';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  OVERLAY_VARIANTS,
  STAMP_TRANSITION,
  STAMP_VARIANTS,
  type StampProps,
  SVG_VARIANTS,
} from './';
import { useEffect, useRef } from 'react';
import { useInView } from '@/lib/useInView';
import { useMeasure, useMouse } from 'react-use';
import c from 'clsx';
import StampSvg from './stamp.svg';

export const Stamp = ({
  addVarsToParent = false,
  className,
  href,
  onClick,
  overlay = true,
  parentRef,
  transitionStart,
}: StampProps) => {
  const [ref, { height, width }] = useMeasure<HTMLDivElement>();
  const innerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(innerRef, 0, false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { elX: mouseX, elY: mouseY } = useMouse(parentRef);
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

  // Stop animating on mount
  !mouseX && !mouseY && moveX.set(0);
  !mouseY && !mouseX && moveY.set(0);

  const setParentAttributes = (moveX = 0, moveY = 0) => {
    if (!parentRef.current || !innerRef.current) return;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseX, mouseY, inView, transitionStart]);

  useEffect(() => {
    if (!addVarsToParent) return;
    if (!inView || transitionStart) return;
    setParentAttributes(moveX.get(), moveY.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moveX.get(), moveY.get(), inView, transitionStart]);

  useEffect(() => {
    if (!addVarsToParent) return;
    const resize = debounce(
      () => setParentAttributes(moveX.get(), moveY.get()),
      100,
    );
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (!addVarsToParent) return;
    setParentAttributes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div aria-hidden className={c('Stamp', className)} ref={ref}>
      <m.div
        className="Stamp-inner"
        ref={innerRef}
        style={{
          x: moveX,
          y: moveY,
        }}
      >
        <m.a
          className="Stamp-stamp"
          href={href}
          onClick={onClick}
          tabIndex={-1}
          transition={STAMP_TRANSITION}
          variants={STAMP_VARIANTS}
          whileHover="hover"
          whileTap="tap"
        >
          <m.div
            animate={inView ? 'animate' : ''}
            className="Stamp-svg"
            variants={SVG_VARIANTS}
          >
            <StampSvg />
          </m.div>
        </m.a>
        {transitionStart && overlay && (
          <m.div className="Stamp-overlay" variants={OVERLAY_VARIANTS} />
        )}
      </m.div>
    </div>
  );
};
