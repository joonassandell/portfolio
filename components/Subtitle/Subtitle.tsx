import { type ElementType, useRef } from 'react'
import { type HTMLMotionProps, m } from 'motion/react'
import { MOVE_IN_VARIANTS } from '@/lib/config'
import { type SubtitleProps } from './'
import { useInView } from '@/lib/useInView'
import c from 'clsx'

export const Subtitle = ({
  animate,
  center,
  children,
  className,
  maxWidth = true,
  tag,
  ...props
}: SubtitleProps) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const Tag = tag ? (m[tag] as ElementType<HTMLMotionProps<typeof tag>>) : m.div

  return (
    <Tag
      className={c(
        'Subtitle',
        {
          'max-w-unset': !maxWidth,
          'text:center ml:auto mr:auto': center,
        },
        className,
      )}
      {...(animate && {
        animate: inView ? 'animate' : '',
        initial: 'initial',
        ref,
        variants: MOVE_IN_VARIANTS,
      })}
      {...props}
    >
      {children}
    </Tag>
  )
}
