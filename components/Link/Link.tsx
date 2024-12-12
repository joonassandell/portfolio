import { AnimatePresence, type HTMLMotionProps, m } from 'motion/react'
import { ConditionalWrapper } from '@/components/ConditionalWrapper'
import { type ElementType, useState } from 'react'
import { IN_VARIANT, type LinkProps, OUT_VARIANT } from './'
import { isBoolean } from '@/lib/utils'
import { useApp } from '@/components/App'
import { useLinkCondition } from '@/lib/useLinkCondition'
import { useUrlState } from '@/lib/useUrlState'
import c from 'clsx'
import NextLink from 'next/link'

export const Link = ({
  children,
  className,
  href,
  icon,
  onClick,
  scrollTo,
  tag,
  target,
  templateTransition = true,
  truncate,
  underline = true,
  ...props
}: LinkProps) => {
  const { setTransition } = useApp()
  const { active, externalTarget } = useUrlState(href)
  const { scrollToHash, shouldNavigate } = useLinkCondition(href, {
    scrollToOptions: scrollTo,
    target,
  })
  const [hover, setHover] = useState(false)
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
          'Link',
          {
            '-underline':
              (isBoolean(underline) && underline && !underlineActive) ||
              (underlineActive && active),
          },
          className,
        )}
        href={href}
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
        <m.span
          className={c('Link-text', { 'text:truncate': truncate })}
          variants={OUT_VARIANT}
        >
          {children}
        </m.span>
        <AnimatePresence>
          {hover && (
            <m.span
              animate="in"
              aria-hidden
              className={c('Link-text absolute', { 'text:truncate': truncate })}
              exit="out"
              initial="initial"
              variants={IN_VARIANT}
            >
              {children}
            </m.span>
          )}
        </AnimatePresence>
        {icon && <span className="Link-icon">{icon}</span>}
      </Tag>
    </ConditionalWrapper>
  )
}
