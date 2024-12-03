import { AnimatePresence, m } from 'motion/react'
import { type ButtonEvent, type LinkEvent } from '@/types'
import { type ButtonProps } from './'
import { ConditionalWrapper } from '@/components/ConditionalWrapper'
import { default as NextLink } from 'next/link'
import { TRANS_PRIMARY_FASTEST } from '@/lib/config'
import { useApp } from '@/components/App'
import { useLinkCondition } from '@/lib/useLinkCondition'
import { useUrlState } from '@/lib/useUrlState'
import c from 'clsx'

export const Button = ({
  children,
  className,
  href,
  icon,
  onClick,
  radius = 'full',
  size = 'm',
  target,
  templateTransition = true,
  variant = 'default',
  ...props
}: ButtonProps) => {
  const { active, externalTarget } = useUrlState(href as URL['href'])
  const { scrollToHash, shouldNavigate } = useLinkCondition(
    href as URL['href'],
    target,
  )
  const { setTransition } = useApp()
  const Tag = href ? 'a' : 'button'

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
        className={c(
          'Button Button--default',
          {
            '-radius:m': radius === 'm',
            '-size:s': size === 's',
            '-size:square': size === 'square',
            '-size:square:s': size === 'square:s',
            'Button--default--primary': variant === 'primary',
            'Button--default--secondary': variant === 'secondary',
          },
          className,
        )}
        href={href}
        onClick={(e: ButtonEvent & LinkEvent) => {
          e.stopPropagation()
          if (shouldNavigate && !active && templateTransition) {
            setTransition('template')
          }
          scrollToHash()
          if (onClick) onClick(e)
        }}
        target={target ?? externalTarget}
        {...props}
      >
        <span
          className={c('Button-text', {
            hideVisually: size?.includes('square'),
          })}
        >
          {children}
        </span>
        {icon && (
          <AnimatePresence initial={false} mode="popLayout">
            <m.span
              animate={{ rotate: 0, scale: 1 }}
              className="Button-icon"
              exit={{ rotate: 45, scale: 0 }}
              initial={{ rotate: -45, scale: 0 }}
              key={icon.type.name}
              transition={TRANS_PRIMARY_FASTEST}
            >
              {icon}
            </m.span>
          </AnimatePresence>
        )}
      </Tag>
    </ConditionalWrapper>
  )
}
