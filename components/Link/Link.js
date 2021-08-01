import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from '../Icon';
import {
  inVariant,
  inVariantX,
  outVariant,
  outVariantX,
} from './Link.animations';
import { default as NextLink } from 'next/link';
import c from 'classnames';
import { useAppContext } from '@/containers/App';
import ConditionalWrapper from '../ConditionalWrapper';

const Link = ({
  arrow,
  className,
  children,
  href,
  isActive,
  onClick,
  orientation,
  target,
  tag = 'a',
  templateTransition = true,
  underline,
}) => {
  const { setTransition } = useAppContext();
  const [hover, setHover] = useState(false);
  const classes = c(className, 'Link', {
    '-underline': underline,
    'is-active': isActive,
    '-vertical': orientation === 'vertical',
    '-arrow': arrow,
  });
  const Tag = tag == 'span' ? motion.span : motion.a;
  const linkTarget = target
    ? target
    : href.startsWith('http')
    ? '_blank'
    : false;
  const hasHref = href && href.startsWith('/');

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
        onBlur={() => {
          if (hover) {
            setHover(false);
          }
        }}
        href={href}
        onClick={e => {
          templateTransition && setTransition('template');
          onClick && onClick(e);
        }}
        onFocus={() => {
          if (!hover) {
            setHover(true);
          }
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...(href && linkTarget && { target: linkTarget })}
        {...(linkTarget === '_blank' && { rel: 'external' })}
      >
        <motion.span
          className="Link-text"
          variants={orientation === 'vertical' ? outVariantX : outVariant}
        >
          {children}
        </motion.span>
        <AnimatePresence>
          {hover && (
            <motion.span
              animate="in"
              className="Link-text Link-text--reveal"
              exit="out"
              initial="initial"
              variants={orientation === 'vertical' ? inVariantX : inVariant}
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
        {arrow && (
          <div className="Link-icon">
            <ArrowRight />
          </div>
        )}
      </Tag>
    </ConditionalWrapper>
  );
};

export default Link;
