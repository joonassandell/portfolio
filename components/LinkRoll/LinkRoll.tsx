import { AnimatePresence, type HTMLMotionProps, m } from 'motion/react'
import {
  CHARACTER_IN_VARIANTS,
  CHARACTER_OUT_VARIANTS,
  LINK_VARIANTS,
  type LinkRollProps,
} from './'
import { ConditionalWrapper } from '@/components/ConditionalWrapper'
import { type ElementType, useState } from 'react'
import { isBoolean, isEmptyString } from '@/lib/utils'
import { useApp } from '@/components/App'
import { useLinkCondition } from '@/lib/useLinkCondition'
import { useUrlState } from '@/lib/useUrlState'
import c from 'clsx'
import NextLink from 'next/link'

export const LinkRoll = ({
  children,
  className,
  href,
  onClick,
  scrollTo,
  tag,
  target,
  templateTransition = true,
  underline,
  ...props
}: LinkRollProps) => {
  const { setTransition } = useApp()
  const { active, externalTarget } = useUrlState(href)
  const { scrollToHash, shouldNavigate } = useLinkCondition(href, {
    scrollToOptions: scrollTo,
    target,
  })
  const [hover, setHover] = useState(false)
  const characters = children?.split('')
  const underlineActive = underline === 'active'
  const Tag = tag ? (m[tag] as ElementType<HTMLMotionProps<typeof tag>>) : m.a

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
          scrollToHash()
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
              aria-hidden
              className="LinkRoll-text absolute inset:0"
              exit="out"
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
