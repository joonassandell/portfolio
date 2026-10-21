import { clamp, kebabCase } from 'es-toolkit'
import { getPointerPosition, mapRange } from '@/lib/utils'
import { Heading } from '@/components/Heading'
import { LinkRoll } from '@/components/LinkRoll'
import { m, useMotionValue, useSpring, useTransform } from 'motion/react'
import { MQ, TRANS_MOVE, TRANS_PRIMARY_FAST } from '@/lib/config'
import { type NextProjectProps } from './'
import { type PointerEvent, useEffect, useRef, useState } from 'react'
import { SITEMAP } from '@/lib/sitemap'
import { useApp } from '@/components/App'
import { useMedia } from 'react-use'
import { useRouter } from 'next/router'
import Image from 'next/image'
import useMeasure from 'react-use-measure'

export const NextProject = ({ id }: NextProjectProps) => {
  const {
    detect: { hasTouch },
    setTransition,
  } = useApp()
  const { events, push } = useRouter()
  const { title, url } = SITEMAP[id]
  const src = `/${kebabCase(id)}/joonassandell-${kebabCase(id)}-thumbnail.jpg`
  const ref = useRef<HTMLDivElement>(null)
  const leaving = useRef(false)
  const [innerRef, { height, width }] = useMeasure()
  const [figureRef, { height: figureHeight, width: figureWidth }] = useMeasure()
  const figureWidthHalf = figureWidth / 2
  const figureHeightHalf = figureHeight / 2
  const mqS = useMedia(MQ.s, false)

  /**
   * Move: Horizontal
   */
  const x = useMotionValue(0)
  const moveX = useSpring(x, TRANS_MOVE.medium)

  /**
   * Move: Vertical
   */
  const y = useMotionValue(0)
  const moveY = useSpring(y, TRANS_MOVE.medium)

  /**
   * Rotate
   */
  const r = useMotionValue(-0.5)
  const rotateTrans = useTransform(r, [-1, 0, 1], [-30, 0, 30])
  const rotate = useSpring(rotateTrans, TRANS_MOVE.medium)

  /**
   * Transform figure
   */
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    // Don't move the figure while navigating away, it competes with the page
    // transition and causes jank (esp. on touch where pointerdown precedes click)
    if (!ref.current || leaving.current) return

    const {
      height,
      width,
      x: pointerX,
      y: pointerY,
    } = getPointerPosition(e, ref.current)
    const mousePosX = clamp(pointerX, 0, width)
    const mousePosY = clamp(pointerY, 0, height)
    const prevMousePosX = x.get() + figureWidthHalf
    const direction = mousePosX < prevMousePosX ? 'left' : 'right'
    const mouseDistanceX = clamp(Math.abs(prevMousePosX - mousePosX), 0, 100)

    if (mouseDistanceX && mousePosX && mousePosY) {
      x.set(mousePosX - figureWidthHalf)
      y.set(mousePosY - figureHeightHalf)
      r.set(mapRange(mouseDistanceX, 0, 100, 0, direction === 'left' ? 1 : -1))
    }
  }

  /**
   * Allow the figure to move again if navigation doesn't happen
   */
  useEffect(() => {
    leaving.current = false
    const reset = () => (leaving.current = false)
    events.on('routeChangeError', reset)
    return () => events.off('routeChangeError', reset)
  }, [events, id])

  /**
   * Set initial figure position
   */
  const [initial, setInitial] = useState(false)
  useEffect(() => {
    // Keep the figure in place while navigating away
    if (leaving.current) return
    if (width && height && figureWidthHalf && figureHeightHalf) {
      x.set(width - figureWidthHalf * (mqS ? 2.5 : 1))
      y.set(height - figureHeightHalf * (mqS ? 0.8 : 0.3))
      setInitial(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width, figureWidthHalf, figureHeightHalf, mqS])

  return (
    <div
      className="NextProject"
      onClickCapture={e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return
        if ((e.target as Element).closest('a, figure')) leaving.current = true
      }}
      onPointerDown={onPointerMove}
      onPointerMove={onPointerMove}
      ref={ref}
    >
      <div className="NextProject-inner wrap" ref={innerRef}>
        <Heading className="mb:0" size="l" tag="div">
          <LinkRoll animate={!hasTouch} className="NextProject-link" href={url}>
            Next project
          </LinkRoll>
        </Heading>
        <m.figure
          animate={
            initial && {
              opacity: 1,
              transition: TRANS_PRIMARY_FAST,
            }
          }
          className="NextProject-figure"
          initial={{ opacity: 0 }}
          onClick={() => {
            setTransition('template')
            push(url, undefined, { scroll: false })
          }}
          ref={figureRef}
          style={{
            rotate,
            x: moveX,
            y: moveY,
          }}
        >
          <Image
            alt={`Next Project: ${title}`}
            draggable={false}
            height={1920}
            priority
            sizes={`${MQ.l} 33vw, 50vw`}
            src={src}
            width={1440}
          />
        </m.figure>
      </div>
    </div>
  )
}
