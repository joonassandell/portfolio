import { motion } from 'framer-motion';
import { headingVariant, inVariant } from './TextReveal.animations';
import c from 'classnames';

const TextReveal = ({ animate, className, text }) => {
  const classes = c(className, 'TextReveal Heading Heading--primary');

  const animateOptions = animate
    ? { ...animate }
    : {
        animate: 'in',
        initial: 'initial',
      };

  return (
    <motion.h2
      className={classes}
      variants={headingVariant}
      {...animateOptions}
    >
      {text.map((text, index) => {
        return (
          <div key={index} className="TextReveal-text">
            <motion.span
              className="TextReveal-text-inner"
              // key={`text-${index}`}
              variants={inVariant}
            >
              {text}
            </motion.span>
          </div>
        );
      })}
    </motion.h2>
  );
};

export default TextReveal;
