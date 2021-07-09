import { motion } from 'framer-motion';
import { default as NextLink } from 'next/link';
import { useAppContext } from '@/containers/App';
import { useState } from 'react';
import {
  characterInVariants,
  characterOutVariants,
  linkVariants,
} from './LinkRoll.animations';
import c from 'classnames';

const LinkRoll = ({
  word,
  className,
  href,
  onClick,
  templateTransition = false,
}) => {
  const { setTemplateTransition } = useAppContext();
  const [hover, setHover] = useState(false);
  const characters = word.split('');
  const classes = c(className, 'LinkRoll');

  return (
    <NextLink href={href} passHref scroll={false}>
      <motion.a
        animate={hover ? 'in' : 'out'}
        className={classes}
        onClick={e => {
          templateTransition
            ? setTemplateTransition(true)
            : setTemplateTransition(false);
          onClick && onClick(e);
        }}
        initial="out"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.span className="LinkRoll-text" variants={linkVariants}>
          {characters.map((char, index) => {
            return (
              <motion.span
                className="LinkRoll-char"
                key={index}
                variants={characterOutVariants}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.span>
        <motion.span className="LinkRoll-text -hover" variants={linkVariants}>
          {characters.map((char, index) => (
            <motion.span
              className="LinkRoll-char"
              key={index}
              variants={characterInVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.a>
    </NextLink>
  );
};

export default LinkRoll;
