import StampSvg from './stamp.svg';
import { motion } from 'framer-motion';
import c from 'classnames';
import {
  innerVariants,
  svgVariants,
  overlayVariants,
} from './Stamp.animations';
import useIsMobile from '@/lib/useIsMobile';

const Stamp = ({
  className,
  color,
  transitionStart,
  iris,
  opacity,
  overlayBg,
}) => {
  const classes = c(className, 'Stamp');
  const isMobile = useIsMobile();

  return (
    <motion.div
      className={classes}
      style={{
        '--Stamp-color': color,
        '--Stamp-iris': iris,
        '--Stamp-opacity': opacity,
        '--Stamp-overlayBg': overlayBg,
      }}
    >
      <motion.div
        className="Stamp-inner"
        custom={isMobile}
        variants={innerVariants}
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
  );
};

export default Stamp;
