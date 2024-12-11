import { Figure } from '@/components/Figure'
import { type HomeHeroPfpProps } from './'
import {
  m,
  useDragControls,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import { MQ, TRANS_DRAG, TRANS_SPRING, TRANS_TAP } from '@/lib/config'
import { useApp } from '@/components/App'
import { useState } from 'react'
import pfp from '@/public/common/joonassandell/joonassandell-pfp-with-avatar.jpg'
import PfpAvatar from '@/public/common/joonassandell/joonassandell-pfp-avatar.svg'

export const HomeHeroPfp = ({ drag, setActive, setDrag }: HomeHeroPfpProps) => {
  const {
    detect: { hasTouch },
  } = useApp()
  const [hover, setHover] = useState(false)
  const [tap, setTap] = useState(false)

  const dragControls = useDragControls()
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)
  const dragDistance = useTransform(
    [dragX, dragY],
    ([x, y]: number[]) => Math.sqrt(x * x + y * y), // Distance from the center
  )
  const figureTrans = useTransform(dragDistance, [-40, 0, 40], [1, 0.5, 1])
  const figureVal = useSpring(figureTrans, TRANS_SPRING.fast)

  return (
    <div
      className="Template-hero-pfp mb:m mb:ml@l"
      style={{
        cursor: tap || drag ? 'grabbing' : 'grab',
      }}
    >
      <m.div
        className="Template-hero-pfp-figure"
        style={{ opacity: figureVal, scale: figureVal }}
        transition={TRANS_TAP}
      >
        <Figure
          alt="Joonas Sandell profile picture"
          animate={false}
          placeholder={false}
          priority
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
      <div
        className="Template-hero-pfp-boundary"
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
      />
    </div>
  )
}
