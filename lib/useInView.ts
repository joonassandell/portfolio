import { useInView as framerUseInView } from 'motion/react'
import { type MutableRefObject } from 'react'

export const useInView = (
  ref: MutableRefObject<HTMLElement | null>,
  amount = 0,
  once = true,
) => {
  const negativeValue = Math.sign(amount) < 0
  if (negativeValue) amount = 0

  const inView = framerUseInView(ref, {
    amount,
    once,
  })

  if (negativeValue) return true

  return inView
}

export const useInViewVideo = (
  ref: MutableRefObject<HTMLVideoElement | null>,
  amount = 0,
) => {
  const video = ref.current

  const inView = framerUseInView(ref, {
    amount,
  })

  if (video && inView) {
    if (video.paused) {
      video.play()
    }
  }

  if (video && !inView) {
    if (!video.paused) {
      video.pause()
    }
  }

  return inView
}
