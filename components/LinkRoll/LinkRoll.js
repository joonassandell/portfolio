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
import { isBoolean, isEmptyString } from '@/lib/utility';
import ConditionalWrapper from '../ConditionalWrapper';

const LinkRoll = ({
  children,
  className,
  isActive,
  href,
  onClick,
  tag,
  target,
  templateTransition = true,
}) => {
  const { setTransition } = useAppContext();
  const [hover, setHover] = useState(false);
  const characters = children.split('');
  const classes = c(className, 'LinkRoll', {
    'is-active': isActive,
    'has-active': isBoolean(isActive),
  });
  const Tag = tag == 'span' ? motion.span : motion.a;
  const linkTarget = target
    ? target
    : href.startsWith('http')
    ? '_blank'
    : false;
  const hasHref = href && (href.startsWith('/') || href.startsWith('http'));

  return (
    <ConditionalWrapper
      condition={hasHref}
      wrapper={children => (
        <NextLink href={href} passHref scroll={false}>
          {children}
        </NextLink>
      )}
    >
      <Tag
        animate={hover ? 'in' : 'out'}
        className={classes}
        onClick={e => {
          templateTransition && setTransition('template');
          onClick && onClick(e);
        }}
        href={href}
        initial="out"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...(href && linkTarget && { target: linkTarget })}
        {...(linkTarget === '_blank' && { rel: 'external' })}
      >
        <motion.span className="LinkRoll-text" variants={linkVariants}>
          {characters.map((char, index) => {
            const empty = isEmptyString(char);
            empty ? (char = '.') : false;

            return (
              <motion.span
                className={c('LinkRoll-char', {
                  '-empty': empty,
                })}
                key={index}
                variants={characterOutVariants}
                {...(empty && { 'aria-hidden': 'true' })}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="LinkRoll-text -hover"
          variants={linkVariants}
        >
          {characters.map((char, index) => {
            const empty = isEmptyString(char);
            empty ? (char = '.') : false;

            return (
              <motion.span
                className={c('LinkRoll-char', {
                  '-empty': empty,
                })}
                key={index}
                variants={characterInVariants}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.span>
      </Tag>
    </ConditionalWrapper>
  );
};

export default LinkRoll;
