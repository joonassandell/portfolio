import { useInView as framerUseInView } from 'framer-motion';
import { type MutableRefObject } from 'react';

export const useInView = (
  ref: MutableRefObject<HTMLElement | null>,
  threshold = 0,
  once = true,
) => {
  const negativeValue = Math.sign(threshold) < 0;
  if (negativeValue) threshold = 0;

  const inView = framerUseInView(ref, {
    amount: threshold,
    once,
  });

  if (negativeValue) return true;
  return inView;
};

export const useInViewVideo = (
  ref: MutableRefObject<HTMLVideoElement | null>,
  threshold = 0,
) => {
  const video = ref.current;

  const inView = framerUseInView(ref, {
    amount: threshold,
  });

  if (video && inView) {
    if (video.paused) {
      video.play();
    }
  }

  if (video && !inView) {
    if (!video.paused) {
      video.pause();
    }
  }

  return inView;
};
