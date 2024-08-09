import { type MutableRefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import useResizeObserver from 'use-resize-observer';

interface UseParallaxOptions {
  reverse?: boolean;
  speed?: number;
  startPosition?: 0 | 'negative';
  startPositionMultiplier?: number;
}

export const useParallax = (
  ref: MutableRefObject<null>,
  {
    reverse = false,
    speed = 0.1,
    startPosition = 0,
    startPositionMultiplier = 1,
  }: UseParallaxOptions,
) => {
  const { scrollYProgress } = useScroll({
    // offset: ['end start', 'start end'],
    offset: ['start end', 'end start'],
    target: ref,
  });
  const { height = 0 } = useResizeObserver({ ref });
  const scrollSpeed = reverse ? speed : -speed;
  const scrollStartPos =
    startPosition === 'negative'
      ? Math.round(height * -scrollSpeed * startPositionMultiplier)
      : startPosition;

  // const spring = useSpring(scrollYProgress, {
  //   damping: 40,
  //   restSpeed: 1,
  //   stiffness: 500,
  // });

  return {
    value: useTransform(
      scrollYProgress,
      [0, 1],
      [scrollStartPos, height * scrollSpeed],
    ),
  };
};
