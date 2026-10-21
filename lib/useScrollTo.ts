import { SCROLL_TO_DURATION, SCROLL_TO_EASE } from '@/lib/config'
import { useLenis } from 'lenis/react'
import type Lenis from 'lenis'

type LenisScrollToElement = Parameters<Lenis['scrollTo']>[0]
type LenisScrollToOptions = Parameters<Lenis['scrollTo']>[1]
export type ScrollToOptions = LenisScrollToOptions & {
  /** Land flush to the top, ignoring the root's `scroll-padding-top` */
  flush?: boolean
  stopOnComplete?: boolean
}

export const useScrollTo = ({
  flush,
  stopOnComplete,
  ...options
}: ScrollToOptions = {}) => {
  const lenis = useLenis()

  // The header offset comes from `scroll-padding-top` in CSS, which Lenis
  // applies to element/hash targets. `offset` is added on top of it.
  const scrollTo = (
    target: LenisScrollToElement,
    onComplete?: (lenis: Lenis) => void,
  ) => {
    lenis?.scrollTo(target, {
      duration: SCROLL_TO_DURATION,
      easing: SCROLL_TO_EASE,
      ...options,
      ...(flush && {
        offset: parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        ),
      }),
      onComplete: e => {
        if (stopOnComplete) lenis.stop()
        if (onComplete) onComplete(e)
      },
    })
  }

  return scrollTo
}
