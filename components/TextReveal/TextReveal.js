import { motion } from 'framer-motion';
import { headingVariant, inVariant } from './TextReveal.animations';
import c from 'classnames';

const TextReveal = ({ className, text, transitionStart }) => {
  const classes = c(className, 'TextReveal Heading Heading--primary');

  return (
    <motion.h1
      // animate={transitionStart ? 'in' : ''}
      animate="in"
      className={classes}
      initial="initial"
      variants={headingVariant}
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
    </motion.h1>
  );
};

export default TextReveal;
