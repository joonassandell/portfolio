import { useEffect, useRef, useState } from 'react';
import { isString } from '@/lib/utility';
import { useIntersection } from 'react-use';

/**
 * https://github.com/streamich/react-use/issues/1664
 */
export const useInView = (ref, threshold = 0, once = true) => {
  if (isString(threshold)) threshold = parseFloat(threshold);
  if (threshold > 1) threshold = threshold.toFixed(2) * 0.01;
  const negativeValue = Math.sign(threshold) < 0;
  if (negativeValue) threshold = 0;

  const mockRef = useRef(null);
  const [intersectedOnce, setIntersectedOnce] = useState(false);
  const intersection = useIntersection(
    once && intersectedOnce ? mockRef : ref,
    {
      root: null,
      rootMargin: '0px',
      threshold,
    },
  );
  const isIntersecting = intersection?.isIntersecting;

  useEffect(() => {
    if (once && !intersectedOnce && isIntersecting) setIntersectedOnce(true);
  }, [intersectedOnce, isIntersecting, once]);

  if (negativeValue) return true;
  return once ? intersectedOnce : isIntersecting;
};

export const useInViewVideo = (ref, threshold = 0) => {
  const isVideo = ref.current && ref.current.tagName === 'VIDEO';
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold,
  });
  const isIntersecting = intersection?.isIntersecting;

  if (isVideo && isIntersecting) {
    const video = ref.current;
    video.muted = true;

    if (video.paused) {
      console.log('Video play:', video);
      video.play();
    }
  }

  if (isVideo && !isIntersecting) {
    const video = ref.current;

    if (!video.paused) {
      console.log('Video pause:', video);
      video.pause();
    }
  }

  return intersection?.isIntersecting;
};
