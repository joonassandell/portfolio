import { isString } from '@/lib/utility';
import { useIntersection } from 'use-intersection';

const useInView = (ref, threshold = 0, once = true) => {
  if (isString(threshold)) threshold = parseFloat(threshold);
  if (threshold > 1) threshold.toFixed(2) * 0.01;
  const negativeValue = Math.sign(threshold) < 0;
  const isVideo = ref.current && ref.current.tagName === 'VIDEO';

  if (negativeValue) return true;

  if (isVideo) {
    const video = ref.current;
    video.muted = true;
    let inView = useIntersection(ref, {
      threshold,
    });

    if (inView && video.paused) {
      video.play();
    }

    if (!inView && !video.paused) {
      video.pause();
    }

    return;
  }

  let inView = useIntersection(ref, {
    threshold,
    once,
  });

  return inView;
};

export default useInView;
