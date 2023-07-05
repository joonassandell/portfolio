import { isString } from '@/lib/utility';
import { useInView as framerUseInView } from 'framer-motion';

export const useInView = (ref, threshold = 0, once = true) => {
  if (isString(threshold)) threshold = parseFloat(threshold);
  if (threshold > 1) threshold = threshold.toFixed(2) * 0.01;
  const negativeValue = Math.sign(threshold) < 0;
  if (negativeValue) threshold = 0;

  const inView = framerUseInView(ref, {
    amount: threshold,
    once,
  });

  if (negativeValue) return true;
  return inView;
};

export const useInViewVideo = (ref, threshold = 0) => {
  const isVideo = ref.current && ref.current.tagName === 'VIDEO';

  const inView = framerUseInView(ref, {
    amount: threshold,
  });

  if (isVideo && inView) {
    const video = ref.current;
    video.muted = true;

    if (video.paused) {
      console.log('Video play:', video);
      video.play();
    }
  }

  if (isVideo && !inView) {
    const video = ref.current;

    if (!video.paused) {
      console.log('Video pause:', video);
      video.pause();
    }
  }

  return inView;
};
