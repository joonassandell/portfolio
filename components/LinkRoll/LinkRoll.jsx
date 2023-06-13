import { m } from 'framer-motion';
import { default as NextLink } from 'next/link';
import { useAppContext } from '@/components/App';
import { useState } from 'react';
import {
  characterInVariants,
  characterOutVariants,
  linkVariants,
} from './LinkRoll.animations';
import c from 'classnames';
import { isBoolean, isEmptyString } from '@/lib/utility';
import { useUrlState } from '@/lib/useUrlState';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';

export const LinkRoll = ({
  children,
  className,
  isActive,
  href,
  onClick,
  tag,
  target,
  templateTransition = true,
  ...props
}) => {
  const { setTransition } = useAppContext();
  const [hover, setHover] = useState(false);
  const characters = children.split('');
  const classes = c(className, 'LinkRoll', {
    'is-active': isActive,
    'has-active': isBoolean(isActive),
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
        onClick={e => {
          !activeOrExternal && templateTransition && setTransition('template');
          onClick && onClick(e);
        }}
        href={href}
        initial="out"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...(href && linkTarget && { target: linkTarget })}
        {...(linkTarget === '_blank' && { rel: 'external' })}
        {...props}
      >
        <m.span className="LinkRoll-text" variants={linkVariants}>
          {characters.map((char, index) => {
            const empty = isEmptyString(char);
            empty ? (char = '.') : false;

            return (
              <m.span
                className={c('LinkRoll-char', {
                  '-empty': empty,
                })}
                key={index}
                variants={characterOutVariants}
                {...(empty && { 'aria-hidden': 'true' })}
              >
                {char}
              </m.span>
            );
          })}
        </m.span>
        <m.span
          aria-hidden="true"
          className="LinkRoll-text -hover"
          variants={linkVariants}
        >
          {characters.map((char, index) => {
            const empty = isEmptyString(char);
            empty ? (char = '.') : false;

            return (
              <m.span
                className={c('LinkRoll-char', {
                  '-empty': empty,
                })}
                key={index}
                variants={characterInVariants}
              >
                {char}
              </m.span>
            );
          })}
        </m.span>
      </Tag>
    </ConditionalWrapper>
  );
};
