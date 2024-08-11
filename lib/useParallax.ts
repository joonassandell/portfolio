import { type MutableRefObject } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import useResizeObserver from 'use-resize-observer';

interface UseParallaxOptions {
  /**
   * https://www.framer.com/motion/use-scroll/##scroll-offsets
   */
  offset?: any[] | 'start-end' | 'start-start' | 'end-start';
  reverse?: boolean;
  speed?: number;
  startPosition?: 0 | 'negative';
  startPositionMultiplier?: number;
}

export const useParallax = (
  ref: MutableRefObject<null>,
  {
    offset = 'start-end',
    reverse = false,
    speed = 0.1,
    startPosition = 0,
    startPositionMultiplier = 1,
  }: UseParallaxOptions,
) => {
  switch (offset) {
    case 'start-end':
      offset = ['start end', 'end start'];
      break;
    case 'start-start':
      offset = ['start start', 'end start'];
      break;
    case 'end-start':
      offset = ['end start', 'start end'];
      break;
  }

  const { scrollYProgress } = useScroll({
    offset,
    target: ref,
  });
  const { height = 0 } = useResizeObserver({ ref });
  const scrollSpeed = reverse ? speed : -speed;
  const scrollStartPos =
    startPosition === 'negative'
      ? height * -scrollSpeed * startPositionMultiplier
      : startPosition;

  const spring = useSpring(scrollYProgress, {
    damping: 40,
    restSpeed: 1,
    stiffness: 500,
  });

  return {
    value: useTransform(spring, [0, 1], [scrollStartPos, height * scrollSpeed]),
  };
};
