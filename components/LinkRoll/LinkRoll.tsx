import { AnimatePresence, type HTMLMotionProps, m } from 'motion/react'
import {
  CHARACTER_IN_VARIANTS,
  CHARACTER_OUT_VARIANTS,
  LINK_VARIANTS,
  type LinkRollProps,
} from './'
import { ConditionalWrapper } from '@/components/ConditionalWrapper'
import { type ElementType, useState } from 'react'
import { isBoolean, isBrowser, isEmptyString } from '@/lib/utils'
import { useApp } from '@/components/App'
import { useScrollTo } from '@/lib/useScrollTo'
import { useUrlState } from '@/lib/useUrlState'
import c from 'clsx'
import NextLink from 'next/link'

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
  const { html, setTransition } = useApp()
  const { active, external, externalTarget } = useUrlState(href)
  const [hover, setHover] = useState(false)
  const characters = children?.split('')
  const underlineActive = underline === 'active'
  const Tag = tag ? (m[tag] as ElementType<HTMLMotionProps<typeof tag>>) : m.a
  const hasHash = href.startsWith('#')
  const hash = hasHash && isBrowser && html.querySelector(href)
  const shouldNavigate =
    Boolean(href) &&
    !external &&
    target != '_blank' &&
    target != '_new' &&
    !hasHash
  const scrollTo = useScrollTo()

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
        className={c(
          'LinkRoll',
          {
            '-underline':
              (isBoolean(underline) && underline && !underlineActive) ||
              (underlineActive && active),
            'has-underline': underline,
          },
          className,
        )}
        href={href}
        initial="out"
        onBlur={() => setHover(false)}
        onClick={e => {
          e.stopPropagation()
          if (shouldNavigate && !active && templateTransition) {
            setTransition('template')
          }
          if (hasHash) scrollTo(hash as HTMLElement)
          if (onClick) onClick(e)
        }}
        onFocus={() => setHover(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        target={target ?? externalTarget}
        {...props}
      >
        <m.span className="LinkRoll-text" variants={LINK_VARIANTS}>
          {characters.map((char, i) => {
            return (
              <m.span
                className="LinkRoll-char"
                key={i}
                variants={CHARACTER_OUT_VARIANTS}
              >
                {isEmptyString(char) ? '\u00A0' : char}
              </m.span>
            )
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
                return (
                  <m.span
                    className="LinkRoll-char"
                    key={i}
                    variants={CHARACTER_IN_VARIANTS}
                  >
                    {isEmptyString(char) ? '\u00A0' : char}
                  </m.span>
                )
              })}
            </m.span>
          )}
        </AnimatePresence>
      </Tag>
    </ConditionalWrapper>
  )
}
