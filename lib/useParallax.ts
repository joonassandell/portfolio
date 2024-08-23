import { MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { type MutableRefObject, useEffect, useRef, useState } from 'react';
import { SCROLL_SPEED } from '@/lib/config';
import { useApp } from '@/components/App';
import { useWindowSize } from '@/lib/useWindowSize';
import useResizeObserver from 'use-resize-observer';

export interface UseParallaxOptions {
  endPositionMultiplier?: number;
  height?: 'element' | 'viewport';
  maxClientHeight?: number;
  /**
   * https://www.framer.com/motion/use-scroll/##scroll-offsets
   */
  offset?:
    | 'start-end'
    | 'start-start'
    | 'start-center'
    | 'start-80'
    | 'end-start'
    | any[];
  ref?: MutableRefObject<(HTMLDivElement & HTMLElement) | null>;
  reverse?: boolean;
  speed?: 'slowest' | 'slow' | 'medium' | 'fast' | 'fastest' | number;
  speedMultiplier?: number;
  startPosition?: 0 | 'negative';
}

export const useParallax = ({
  endPositionMultiplier = 1,
  height = 'viewport',
  maxClientHeight,
  offset = 'start-end',
  ref,
  reverse = false,
  speed = 'medium',
  speedMultiplier = 1,
  startPosition = 0,
}: UseParallaxOptions = {}) => {
  const [mounted, setMounted] = useState(false);
  const {
    detect: { hasTouch },
  } = useApp();

  switch (offset) {
    case 'start-end':
      offset = ['start end', 'end start'];
      break;
    case 'start-start':
      offset = ['start start', 'end start'];
      break;
    case 'start-center':
      offset = ['start center', 'end start'];
      break;
    case 'start-80':
      offset = ['start 0.8', 'end start'];
      break;
    case 'end-start':
      offset = ['end start', 'start end'];
      break;
  }

  switch (speed) {
    case 'slowest':
      speed = SCROLL_SPEED.SLOWEST;
      break;
    case 'slow':
      speed = SCROLL_SPEED.SLOW;
      break;
    case 'medium':
      speed = SCROLL_SPEED.MEDIUM;
      break;
    case 'fast':
      speed = SCROLL_SPEED.FAST;
      break;
    case 'fastest':
      speed = SCROLL_SPEED.FASTEST;
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

  const scrollHeight =
    height === 'element'
      ? elementHeight
      : maxClientHeight
        ? Math.min(clientHeight, maxClientHeight)
        : clientHeight;
  const scrollSpeed = reverse
    ? speed * speedMultiplier
    : -speed * speedMultiplier;
  const scrollStartPos =
    startPosition === 'negative' ? scrollHeight * -scrollSpeed : startPosition;

  useEffect(() => setMounted(true), []);

  const spring = useSpring(scrollYProgress, {
    damping: 60,
    restSpeed: 1,
    stiffness: 600,
  });

  const transformValue = useTransform(
    hasTouch ? spring : scrollYProgress,
    [0, 1],
    [scrollStartPos, scrollHeight * scrollSpeed * endPositionMultiplier],
  );

  return {
    ref: assignedRef,
    value: mounted ? transformValue : new MotionValue(),
  };
};