import StampSvg from './stamp.svg';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import c from 'classnames';
import {
  stampVariants,
  svgVariants,
  overlayVariants,
} from './Stamp.animations';
import useIsMobile from '@/lib/useIsMobile';
import { useMeasure, useMouseHovered } from 'react-use';
import { useEffect } from 'react';

const Stamp = ({
  className,
  color,
  iris,
  mouseRef,
  mouseLeave = false,
  overlayBg,
  transitionStart,
}) => {
  const classes = c(className, 'Stamp');
  const isMobile = useIsMobile();
  const [ref, { width, height }] = useMeasure();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  let { elX, elY } = useMouseHovered(mouseRef, {
    bound: true,
    whenHovered: true,
  });

  // https://www.framer.com/docs/transition/###damping
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
    }

    if (mouseLeave) {
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
          <motion.div
            className="Stamp-stamp"
            custom={isMobile}
            variants={stampVariants}
            {...(transitionStart && { exit: 'exit' })}
          >
            <motion.div
              animate="animate"
              className="Stamp-svg"
              variants={svgVariants}
            >
              <StampSvg />
            </motion.div>
          </motion.div>
          {transitionStart && (
            <motion.div
              className="Stamp-overlay"
              custom={isMobile}
              variants={overlayVariants}
              {...(transitionStart && { exit: 'exit' })}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Stamp;
