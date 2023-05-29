import { motion } from 'framer-motion';
import { headingVariant, inVariant } from './TextReveal.animations';
import c from 'classnames';

const TextReveal = ({ className, custom, text, ...props }) => {
  const classes = c(className, 'TextReveal Heading');

  return (
    <motion.h2
      className={classes}
      custom={custom}
      variants={headingVariant}
      {...props}
    >
      {text.map((text, index) => {
        return (
          <div key={index} className="TextReveal-text">
            <motion.span
              className="TextReveal-text-inner"
              custom={custom}
              variants={inVariant}
              {...props}
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
