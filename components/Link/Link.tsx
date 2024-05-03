import { AnimatePresence, m, type HTMLMotionProps } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from '../Icon';
import {
  inVariant,
  inVariantX,
  outVariant,
  outVariantX,
  type LinkProps,
} from './';
import { default as NextLink } from 'next/link';
import c from 'clsx';
import { useAppContext } from '@/components/App';
import { useUrlState } from '@/lib/useUrlState';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';

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
  underline,
  ...props
}: LinkProps) => {
  const { setTransition } = useAppContext();
  const [hover, setHover] = useState(false);
  const classes = c(className, 'Link', {
    '-underline': underline,
    '-vertical': orientation === 'vertical',
    '-arrow': arrow,
  });
  const Tag = tag ? m<HTMLMotionProps<typeof tag>>(tag) : m.a;
  const linkTarget = target
    ? target
    : href?.startsWith('http')
    ? '_blank'
    : false;
  const hasHref = Boolean(href && href.startsWith('/'));
  const { active, external } = useUrlState(href);
  const activeOrExternal = active || external;

  return (
    <ConditionalWrapper
      condition={hasHref}
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
