import { type MutableRefObject, useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useWindowSize } from '@/lib/useWindowSize';
import useResizeObserver from 'use-resize-observer';

interface UseParallaxOptions {
  height?: 'element' | 'viewport';
  /**
   * https://www.framer.com/motion/use-scroll/##scroll-offsets
   */
  offset?: any[] | 'start-end' | 'start-start' | 'end-start';
  ref?: MutableRefObject<null>;
  reverse?: boolean;
  speed?: number;
  startPosition?: 0 | 'negative';
  startPositionMultiplier?: number;
}

export const SCROLL_SPEED = 0.15;

export const useParallax = ({
  height = 'viewport',
  offset = 'start-end',
  ref,
  reverse = false,
  speed = SCROLL_SPEED,
  startPosition = 0,
  startPositionMultiplier = 1,
}: UseParallaxOptions = {}) => {
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
  const createdRef = useRef(null);
  const assignedRef = ref ?? createdRef;
  const { scrollYProgress } = useScroll({
    offset,
    target: assignedRef,
  });
  const { clientHeight = 0 } = useWindowSize();
  const { height: elementHeight = 0 } = useResizeObserver({ ref: assignedRef });

  const scrollHeight = height === 'element' ? elementHeight : clientHeight;
  const scrollSpeed = reverse ? speed : -speed;
  const scrollStartPos =
    startPosition === 'negative'
      ? scrollHeight * -scrollSpeed * startPositionMultiplier
      : startPosition;

  const spring = useSpring(scrollYProgress, {
    damping: 40,
    restSpeed: 1,
    stiffness: 500,
  });

  return {
    ref: assignedRef,
    value: useTransform(
      spring,
      [0, 1],
      [scrollStartPos, scrollHeight * scrollSpeed],
    ),
  };
};
