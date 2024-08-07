import { AnimatePresence, type HTMLMotionProps, m } from 'framer-motion';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { type ElementType, useState } from 'react';
import {
  inVariant,
  inVariantX,
  type LinkProps,
  outVariant,
  outVariantX,
} from './';
import { isBoolean } from '@/lib/utils';
import { useApp } from '@/components/App';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';
import NextLink from 'next/link';

export const Link = ({
  children,
  className,
  href,
  icon,
  onClick,
  orientation = 'horizontal',
  tag,
  target,
  templateTransition = true,
  truncate,
  underline = true,
  ...props
}: LinkProps) => {
  const { setTransition } = useApp();
  const { active, external, externalTarget } = useUrlState(href);
  const [hover, setHover] = useState(false);
  const underlineActive = underline === 'active';
  const classes = c(className, 'Link', {
    '-underline':
      (isBoolean(underline) && underline && !underlineActive) ||
      (underlineActive && active),
    '-vertical': orientation === 'vertical',
  });
  const Tag = tag ? (m[tag] as ElementType<HTMLMotionProps<typeof tag>>) : m.a;
  const shouldNavigate =
    Boolean(href) && !external && target != '_blank' && target != '_new';

  return (
    <ConditionalWrapper
      condition={shouldNavigate}
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
          shouldNavigate &&
            !active &&
            templateTransition &&
            setTransition('template');
          onClick && onClick(e);
        }}
        onFocus={() => setHover(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        target={target ?? externalTarget}
        {...props}
      >
        <m.span
          className={c('Link-text', { 'text:truncate': truncate })}
          variants={orientation === 'vertical' ? outVariantX : outVariant}
        >
          {children}
        </m.span>
        <AnimatePresence>
          {hover && (
            <m.span
              animate="in"
              className={c('Link-text -hover', { 'text:truncate': truncate })}
              exit="out"
              hidden
              initial="initial"
              variants={orientation === 'vertical' ? inVariantX : inVariant}
            >
              {children}
            </m.span>
          )}
        </AnimatePresence>
        {icon && <span className="Link-icon">{icon}</span>}
      </Tag>
    </ConditionalWrapper>
  );
};
