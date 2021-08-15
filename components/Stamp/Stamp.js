import StampSvg from './stamp.svg';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import c from 'classnames';
import {
  stampVariants,
  svgVariants,
  overlayVariants,
} from './Stamp.animations';
import useIsMobile from '@/lib/useIsMobile';
import { useMouseHovered, useIntersection } from 'react-use';
import { useEffect, useRef } from 'react';
import useMeasureDirty from 'react-use/lib/useMeasureDirty';

/**
 * With `useMeasureDirty` I can use the mouseRef outside this component to
 * get the parent component (Hero) dimensions.
 *
 * https://github.com/streamich/react-use/issues/1227
 * const [ref, { width, height }] = useMeasure();
 */
const Stamp = ({
  className,
  color,
  href,
  iris,
  mouseRef,
  mouseLeave = false,
  onClick,
  overlayBg,
  transitionStart,
}) => {
  const classes = c(className, 'Stamp');
  const isMobile = useIsMobile();
  const ref = useRef(null);
  let intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
  });
  const inView = intersection && intersection.intersectionRatio;
  const { width, height } = useMeasureDirty(mouseRef);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  let { elX, elY } = useMouseHovered(mouseRef, {
    bound: true,
    whenHovered: true,
  });
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

  useEffect(() => {
    if (!mouseLeave) {
      x.set(elX);
      y.set(elY);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [elX, elY, mouseLeave]);

  // const handleMouse = e => {
  //   console.log(e.pageX);
  //   x.set(e.pageX);
  //   y.set(e.pageY);
  // };

  return (
    <div
      aria-hidden="true"
      data-scroll
      data-scroll-id="stamp"
      data-scroll-position="top"
      className={classes}
      style={{
        '--Stamp-color': color,
        '--Stamp-iris': iris,
        '--Stamp-overlayBg': overlayBg,
      }}
      ref={ref}
      // onMouseMove={handleMouse}
    >
      <div className="Stamp-inner">
        <motion.div
          className="Stamp-content"
          style={{
            y: moveY,
            x: moveX,
          }}
        >
          <motion.a
            className="Stamp-stamp"
            custom={isMobile}
            href={href}
            onClick={onClick}
            variants={stampVariants}
            whileHover="hover"
            whileTap="tap"
            transition={stampVariants.transition}
            {...(transitionStart && { exit: 'exit' })}
          >
            <motion.div
              animate={inView ? 'animate' : ''}
              className="Stamp-svg"
              variants={svgVariants}
            >
              <StampSvg />
            </motion.div>
          </motion.a>
          {transitionStart && (
            <motion.div
              className="Stamp-overlay"
              exit="exit"
              custom={isMobile}
              variants={overlayVariants}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Stamp;
