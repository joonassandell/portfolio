import { HEADER_HEIGHT } from '@/components/Header'
import { SCROLL_TO_DURATION, SCROLL_TO_EASE } from '@/lib/config'
import { useLenis } from 'lenis/react'
import type Lenis from 'lenis'

type LenisScrollToElement = Parameters<Lenis['scrollTo']>[0]
type LenisScrollToOptions = Parameters<Lenis['scrollTo']>[1]
export type ScrollToOptions = LenisScrollToOptions & {
  stopOnComplete?: boolean
}

export const useScrollTo = ({
  stopOnComplete,
  ...options
}: ScrollToOptions = {}) => {
  const lenis = useLenis()

  const scrollTo = (
    target: LenisScrollToElement,
    onComplete?: (lenis: Lenis) => void,
  ) => {
    lenis?.scrollTo(target, {
      duration: SCROLL_TO_DURATION,
      easing: SCROLL_TO_EASE,
      offset: -HEADER_HEIGHT,
      ...options,
      onComplete: e => {
        if (stopOnComplete) lenis.stop()
        if (onComplete) onComplete(e)
      },
    })
  }

  return scrollTo
}
