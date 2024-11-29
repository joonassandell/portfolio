import { animate, m } from 'motion/react'
import { Fragment, type MouseEvent, useEffect, useRef, useState } from 'react'
import { getClosestEdge } from '@/lib/utils'
import {
  type HeaderMaskNavItemProps,
  MASK_ITEM_MARQUEE_INNER_VARIANT,
  MASK_ITEM_MARQUEE_TRANSITION,
  MASK_ITEM_MARQUEE_VARIANT,
  MASK_ITEM_VARIANT,
} from './'
import { useApp } from '@/components/App'
import { useUrlState } from '@/lib/useUrlState'
import c from 'clsx'
import EyeSvg from './eye.svg'
import Link from 'next/link'

export const HeaderMaskNavItem = ({
  color,
  focus,
  href,
  onClick,
  title,
  year,
}: HeaderMaskNavItemProps) => {
  const { active } = useUrlState(href)
  const [hover, setHover] = useState<'in' | 'out' | false>(false)
  const [closestEdge, setClosestEdge] = useState('top')
  const [reveal, setReveal] = useState(false)
  const [revealTimeout, setRevealTimeout] =
    useState<ReturnType<typeof setTimeout>>()
  const ref = useRef<HTMLLIElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const isFocus = document.activeElement === linkRef.current
  const {
    detect: { hasTouch },
  } = useApp()

  const findClosestEdge = (e: MouseEvent) => {
    if (!ref.current) return
    const x = e.pageX - ref.current?.offsetLeft
    const y = e.pageY - ref.current?.offsetTop

    setClosestEdge(
      getClosestEdge(x, y, ref.current.clientWidth, ref.current.clientHeight),
    )
  }

  useEffect(() => {
    if (!reveal || !marqueeRef.current) return
    const { current } = marqueeRef
    const width = current.clientWidth
    const duration = width / 50 - width / 58
    const controls = animate('-50%', '0%', {
      duration: duration > 0 ? duration : 25,
      ease: 'linear',
      onUpdate(value) {
        if (!current) {
          controls.stop()
          return
        }
        current.style.transform = `translateX(${value}) translateZ(0px)`
      },
      repeat: Infinity,
      repeatType: 'loop',
    })
  }, [reveal])

  useEffect(() => {
    if (focus) linkRef?.current?.focus()
  }, [focus])

  return (
    <m.li
      className={c('Header-mask-nav-item', {
        'is-active': active,
      })}
      ref={ref}
      style={{ ['--Header-mask-nav-marquee-iris' as PropertyKey]: color }}
      variants={MASK_ITEM_VARIANT}
    >
      <Link
        className="Header-mask-nav-link"
        href={href}
        onBlur={() => setHover('out')}
        onClick={e => {
          if (onClick) onClick(e)
          if (!hasTouch) setHover('out')
        }}
        onFocus={() => setHover('in')}
        onMouseEnter={e => {
          if (isFocus) return
          findClosestEdge(e)
          setHover('in')
        }}
        onMouseLeave={e => {
          if (isFocus) return
          findClosestEdge(e)
          setHover('out')
        }}
        ref={linkRef}
      >
        <span className="Header-mask-nav-link-inner">
          <span className="Header-mask-nav-link-text">{title}</span>
          <EyeSvg className="Header-mask-nav-link-eye" />
        </span>
      </Link>
      <m.div
        animate={hover}
        aria-hidden
        className="Header-mask-nav-marquee"
        custom={closestEdge}
        initial="out"
        onAnimationComplete={() => {
          if (hover === 'out') {
            setRevealTimeout(setTimeout(() => setReveal(false), 100))
          }
        }}
        onAnimationStart={() => {
          if (hover === 'in') {
            if (revealTimeout) clearTimeout(revealTimeout)
            setReveal(true)
          }
        }}
        transition={MASK_ITEM_MARQUEE_TRANSITION}
        variants={MASK_ITEM_MARQUEE_VARIANT}
      >
        <m.div
          className="Header-mask-nav-marquee-inner"
          custom={closestEdge}
          transition={MASK_ITEM_MARQUEE_TRANSITION}
          variants={MASK_ITEM_MARQUEE_INNER_VARIANT}
        >
          {reveal && (
            <m.div
              className="Header-mask-nav-marquee-inner-self"
              ref={marqueeRef}
            >
              {[...Array(10)].map((x, i) => {
                return (
                  <Fragment key={i}>
                    <span>{title}</span>
                    <EyeSvg className="Header-mask-nav-marquee-eye" />
                    <span>{year}</span>
                    <EyeSvg className="Header-mask-nav-marquee-eye" />
                  </Fragment>
                )
              })}
            </m.div>
          )}
        </m.div>
      </m.div>
    </m.li>
  )
}
