import { AnimatePresence, type HTMLMotionProps, m } from 'framer-motion';
import {
  CHARACTER_IN_VARIANTS,
  CHARACTER_OUT_VARIANTS,
  LINK_VARIANTS,
  type LinkRollProps,
} from './';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { type ElementType, useState } from 'react';
import { isBoolean, isEmptyString } from '@/lib/utils';
import { useApp } from '@/components/App';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';
import NextLink from 'next/link';

export const LinkRoll = ({
  children,
  className,
  href,
  onClick,
  tag,
  target,
  templateTransition = true,
  underline,
  ...props
}: LinkRollProps) => {
  const { setTransition } = useApp();
  const { active, external, externalTarget } = useUrlState(href);
  const [hover, setHover] = useState(false);
  const characters = children?.split('');
  const underlineActive = underline === 'active';
  const classes = c(className, 'LinkRoll', {
    '-underline':
      (isBoolean(underline) && underline && !underlineActive) ||
      (underlineActive && active),
    'has-underline': underline,
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
        initial="out"
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
        <m.span className="LinkRoll-text" variants={LINK_VARIANTS}>
          {characters.map((char, i) => {
            isEmptyString(char) ? (char = '\u00A0') : false;

            return (
              <m.span
                className="LinkRoll-char"
                key={i}
                variants={CHARACTER_OUT_VARIANTS}
              >
                {char}
              </m.span>
            );
          })}
        </m.span>
        <AnimatePresence>
          {hover && (
            <m.span
              animate="in"
              className="LinkRoll-text -hover"
              exit="out"
              hidden
              initial="out"
              variants={LINK_VARIANTS}
            >
              {characters.map((char, i) => {
                const empty = isEmptyString(char);
                empty ? (char = '\u00A0') : false;

                return (
                  <m.span
                    className={c('LinkRoll-char', { '-empty': empty })}
                    key={i}
                    variants={CHARACTER_IN_VARIANTS}
                  >
                    {char}
                  </m.span>
                );
              })}
            </m.span>
          )}
        </AnimatePresence>
      </Tag>
    </ConditionalWrapper>
  );
};
