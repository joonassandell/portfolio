import { MotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { type RefObject, useEffect, useRef, useState } from 'react'
import { SCROLL_SPEED } from '@/lib/config'
import { useApp } from '@/components/App'
import { useWindowSize } from '@/lib/useWindowSize'
import useResizeObserver from 'use-resize-observer'

export interface UseParallaxOptions {
  endPositionMultiplier?: number
  height?: 'element' | 'viewport'
  maxClientHeight?: number
  /**
   * https://motion.dev/docs/react-use-scroll#scroll-offsets
   */
  offset?:
    | 'start-end'
    | 'start-start'
    | 'start-center'
    | 'start-80'
    | 'end-start'
    | any[]
  ref?: RefObject<HTMLElement | null>
  reverse?: boolean
  speed?: 'slowest' | 'slow' | 'medium' | 'fast' | 'fastest' | number
  speedMultiplier?: number
  startPosition?: 0 | 'negative'
  startPositionMultiplier?: number
}

export const useParallax = <Ref = HTMLDivElement>({
  endPositionMultiplier = 1,
  height = 'viewport',
  maxClientHeight = 1200,
  offset = 'start-end',
  ref,
  reverse = false,
  speed = 'medium',
  speedMultiplier = 1,
  startPosition = 0,
  startPositionMultiplier = 1,
}: UseParallaxOptions = {}) => {
  const [mounted, setMounted] = useState(false)
  const {
    detect: { hasTouch },
  } = useApp()

  switch (offset) {
    case 'start-end':
      offset = ['start end', 'end start']
      break
    case 'start-start':
      offset = ['start start', 'end start']
      break
    case 'start-center':
      offset = ['start center', 'end start']
      break
    case 'start-80':
      offset = ['start 0.8', 'end start']
      break
    case 'end-start':
      offset = ['end start', 'start end']
      break
  }

  switch (speed) {
    case 'slowest':
      speed = SCROLL_SPEED.slowest
      break
    case 'slow':
      speed = SCROLL_SPEED.slow
      break
    case 'medium':
      speed = SCROLL_SPEED.medium
      break
    case 'fast':
      speed = SCROLL_SPEED.fast
      break
    case 'fastest':
      speed = SCROLL_SPEED.fastest
      break
  }

  const createdRef = useRef(null)
  const assignedRef = ref ?? createdRef
  const { scrollYProgress } = useScroll({
    offset,
    target: assignedRef,
  })
  const { clientHeight = 0 } = useWindowSize()
  const { height: elementHeight = 0 } = useResizeObserver({
    ref: assignedRef as RefObject<HTMLElement>,
  })

  const scrollHeight =
    height === 'element'
      ? elementHeight
      : maxClientHeight
        ? Math.min(clientHeight, maxClientHeight)
        : clientHeight
  const scrollSpeed = reverse
    ? speed * speedMultiplier
    : -speed * speedMultiplier
  const scrollStartPos =
    startPosition === 'negative' ? scrollHeight * -scrollSpeed : startPosition

  useEffect(() => setMounted(true), [])

  const spring = useSpring(scrollYProgress, {
    damping: 60,
    restSpeed: 1,
    stiffness: 600,
  })

  const transformValue = useTransform(
    hasTouch ? spring : scrollYProgress,
    [0, 1],
    [
      scrollStartPos * startPositionMultiplier,
      scrollHeight * scrollSpeed * endPositionMultiplier,
    ],
  )

  return {
    ref: assignedRef as RefObject<Ref>,
    value: mounted ? transformValue : new MotionValue(),
  }
}
