import StampSvg from './stamp.svg';
import { motion } from 'framer-motion';
import c from 'classnames';
import { stampVariant, stampInnerVariant } from './stamp.animations';
import useIsMobile from '@/lib/useIsMobile';

const Stamp = ({ className, color, iris, opacity, exit }) => {
  const classes = c(className, 'Stamp');
  const isMobile = useIsMobile();

  return (
    <motion.div
      className={classes}
      custom={isMobile}
      style={{
        '--Stamp-color': color,
        '--Stamp-iris': iris,
        '--Stamp-opacity': opacity,
      }}
      variants={stampVariant}
      {...(exit && { exit: 'exit' })}
    >
      <motion.div animate="animate" variants={stampInnerVariant}>
        <StampSvg />
      </motion.div>
    </motion.div>
  );
};

export default Stamp;
