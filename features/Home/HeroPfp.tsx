import { Figure } from '@/components/Figure'
import { type HomeHeroPfpProps } from './'
import {
  m,
  useDragControls,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import {
  MQ,
  TRANS_DRAG,
  TRANS_MOVE,
  TRANS_SPRING,
  TRANS_TAP,
} from '@/lib/config'
import { useApp } from '@/components/App'
import { useEffect, useState } from 'react'
import pfp from '@/public/common/joonassandell/joonassandell-pfp-with-avatar.jpg'
import PfpAvatar from '@/public/common/joonassandell/joonassandell-pfp-avatar.svg'
import useMeasure from 'react-use-measure'

export const HomeHeroPfp = ({ drag, setActive, setDrag }: HomeHeroPfpProps) => {
  const {
    detect: { hasTouch },
    transitionComplete,
  } = useApp()
  const [hover, setHover] = useState(false)
  const [tap, setTap] = useState(false)

  const dragControls = useDragControls()
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)
  const dragDistanceCenter = useTransform([dragX, dragY], ([x, y]: number[]) =>
    Math.sqrt(x * x + y * y),
  )
  const figureVal = useSpring(
    useTransform(dragDistanceCenter, [-40, 0, 40], [1, 0.5, 1]),
    TRANS_SPRING.fast,
  )

  const [mouseRef, bounds] = useMeasure({ scroll: false })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const moveX = useSpring(
    useTransform(mouseX, x => x / 10),
    TRANS_MOVE.fast,
  )
  const moveY = useSpring(
    useTransform(mouseY, y => y / 10),
    TRANS_MOVE.fast,
  )

  /**
   * Fix bounds.y getting wrong values after template transition. Happens most
   * likely because this component gets rendered immediately when the template
   * transition starts and the measured bound.y is way larger.
   *
   * TODO: Figure out better way to fix this
   */
  useEffect(() => {
    if (transitionComplete === '/') window.dispatchEvent(new Event('resize'))
  }, [transitionComplete])

  return (
    <div className="Template-hero-pfp relative user-select:none mb:m mb:ml@l">
      <m.div className="Template-hero-pfp-main" style={{ x: moveX, y: moveY }}>
        <m.div
          className="Template-hero-pfp-figure"
          style={{ opacity: figureVal, scale: figureVal }}
          transition={TRANS_TAP}
        >
          <Figure
            alt="Joonas Sandell profile picture"
            animate={false}
            placeholder={false}
            quality={90}
            sizes={`${MQ['xl']} 10vw, 7rem`}
            {...pfp}
          />
        </m.div>
        <m.div
          animate={{
            scale: tap ? 0.9 : 1,
          }}
          className="Template-hero-pfp-avatar"
          drag
          dragConstraints={{
            bottom: 80,
            left: -80,
            right: 80,
            top: -80,
          }}
          dragControls={dragControls}
          dragElastic={0.3}
          dragSnapToOrigin
          dragTransition={TRANS_DRAG}
          onDrag={(_, info) => {
            dragX.set(info.offset.x)
            dragY.set(info.offset.y)
          }}
          onDragEnd={() => {
            dragX.set(0)
            dragY.set(0)
            setDrag(false)
            if (!hover) setActive(false)
          }}
          onDragStart={() => {
            setDrag(true)
            setTap(false)
          }}
          transition={TRANS_TAP}
        >
          <PfpAvatar aria-hidden />
        </m.div>
      </m.div>
      <div
        className="Template-hero-pfp-dragBound"
        onPointerDown={e => {
          dragControls.start(e)
          setTap(true)
        }}
        onPointerEnter={() => {
          setActive(true)
          if (!hasTouch) setHover(true)
        }}
        onPointerLeave={() => {
          if (!drag && !tap) setActive(false)
          if (!hasTouch) setHover(false)
        }}
        onPointerUp={() => setTap(false)}
        style={{
          cursor: tap || drag ? 'grabbing' : 'grab',
        }}
      />
      <div
        className="Template-hero-pfp-mouseBound"
        onPointerLeave={() => {
          if (hasTouch) return
          mouseX.set(0)
          mouseY.set(0)
        }}
        onPointerMove={e => {
          if (drag || tap || hasTouch) return

          // Horizontal position relative to the center of the element
          mouseX.set(e.clientX - bounds.x - bounds.width / 2)

          // Vertical position relative to the center of the element
          mouseY.set(e.clientY - bounds.y - bounds.height / 2)
        }}
        ref={mouseRef}
      />
    </div>
  )
}
