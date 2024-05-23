import { AnimatePresence, type HTMLMotionProps, m } from 'framer-motion';
import { ArrowRight } from '../Icon';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import {
  inVariant,
  inVariantX,
  type LinkProps,
  outVariant,
  outVariantX,
} from './';
import { default as NextLink } from 'next/link';
import { useApp } from '@/components/App';
import { useState } from 'react';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';

export const Link = ({
  arrow,
  children,
  className,
  href,
  onClick,
  orientation = 'horizontal',
  tag,
  target,
  templateTransition = true,
  underline = true,
  ...props
}: LinkProps) => {
  const { setTransition } = useApp();
  const [hover, setHover] = useState(false);
  const classes = c(className, 'Link', {
    '-arrow': arrow,
    '-underline': underline,
    '-vertical': orientation === 'vertical',
  });
  const Tag = tag ? m<HTMLMotionProps<typeof tag>>(tag) : m.a;
  const { active, external, externalTarget } = useUrlState(href);
  const activeOrExternal = active || external;

  return (
    <ConditionalWrapper
      condition={!external}
      wrapper={children => (
        <NextLink
          href={href as URL['href']}
          legacyBehavior
          passHref
          scroll={false}
        >
          {children}
        </NextLink>
      )}
    >
      <Tag
        animate={hover ? 'in' : 'out'}
        className={classes}
        href={href}
        onBlur={() => setHover(false)}
        onClick={e => {
          e.stopPropagation();
          !activeOrExternal && templateTransition && setTransition('template');
          onClick && onClick(e);
        }}
        onFocus={() => setHover(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        target={target ?? externalTarget}
        {...props}
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
              className="Link-text -hover"
              exit="out"
              hidden
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
