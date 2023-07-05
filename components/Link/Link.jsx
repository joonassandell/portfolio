import { AnimatePresence, m } from 'framer-motion';
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
import { useAppContext } from '@/components/App';
import { useUrlState } from '@/lib/useUrlState';
import { ConditionalWrapper } from '../ConditionalWrapper';

export const Link = ({
  arrow,
  className,
  children,
  href,
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
    '-vertical': orientation === 'vertical',
    '-arrow': arrow,
  });
  const Tag = tag == 'span' ? m.span : m.a;
  const linkTarget = target
    ? target
    : href.startsWith('http')
    ? '_blank'
    : false;
  const hasHref = href && href.startsWith('/');
  const { active, external } = useUrlState(href);
  const activeOrExternal = active || external;

  return (
    <ConditionalWrapper
      condition={hasHref}
      wrapper={children => (
        <NextLink href={href} legacyBehavior passHref scroll={false}>
          {children}
        </NextLink>
      )}
    >
      <Tag
        animate={hover ? 'in' : 'out'}
        className={classes}
        href={href}
        onClick={e => {
          !activeOrExternal && templateTransition && setTransition('template');
          onClick && onClick(e);
        }}
        onBlur={() => setHover(false)}
        onFocus={() => setHover(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...(href && linkTarget && { target: linkTarget })}
        {...(linkTarget === '_blank' && { rel: 'external' })}
      >
        <m.span
          className="Link-text"
          variants={orientation === 'vertical' ? outVariantX : outVariant}
        >
          {children}
        </m.span>
        <AnimatePresence>
          {hover && (
            <m.span
              animate="in"
              className="Link-text Link-text--reveal"
              exit="out"
              initial="initial"
              variants={orientation === 'vertical' ? inVariantX : inVariant}
            >
              {children}
            </m.span>
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
