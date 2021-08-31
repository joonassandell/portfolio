import StampSvg from './stamp.svg';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import c from 'classnames';
import {
  stampVariants,
  svgVariants,
  overlayVariants,
} from './Stamp.animations';
import { useMouseHovered } from 'react-use';
import { useEffect, useRef } from 'react';
import { useMeasure } from 'react-use';
import useInView from '@/lib/useInView';

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
  const [ref, { width, height }] = useMeasure();
  const innerRef = useRef(null);
  const inView = useInView(innerRef, 0, false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { elX, elY } = useMouseHovered(mouseRef, {
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
      ref={ref}
      style={{
        '--Stamp-color': color,
        '--Stamp-iris': iris,
        '--Stamp-overlayBg': overlayBg,
      }}
      // onMouseMove={handleMouse}
    >
      <div className="Stamp-inner">
        <motion.div
          className="Stamp-content"
          ref={innerRef}
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
