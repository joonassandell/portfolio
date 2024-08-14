import { MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { type MutableRefObject, useEffect, useRef, useState } from 'react';
import { useApp } from '@/components/App';
import { useWindowSize } from '@/lib/useWindowSize';
import useResizeObserver from 'use-resize-observer';

export interface UseParallaxOptions {
  endPositionMultiplier?: number;
  height?: 'element' | 'viewport';
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
  startPositionMultiplier?: number;
}

const SCROLL_SPEED_SLOWEST = 0.05;
const SCROLL_SPEED_SLOW = 0.1;
const SCROLL_SPEED = 0.15;
const SCROLL_SPEED_FAST = 0.25;
const SCROLL_SPEED_FASTEST = 0.4;

export const useParallax = ({
  endPositionMultiplier = 1,
  height = 'viewport',
  offset = 'start-end',
  ref,
  reverse = false,
  speed = 'medium',
  speedMultiplier = 1,
  startPosition = 0,
  startPositionMultiplier = 1,
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
      speed = SCROLL_SPEED_SLOWEST;
      break;
    case 'slow':
      speed = SCROLL_SPEED_SLOW;
      break;
    case 'medium':
      speed = SCROLL_SPEED;
      break;
    case 'fast':
      speed = SCROLL_SPEED_FAST;
      break;
    case 'fastest':
      speed = SCROLL_SPEED_FASTEST;
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
  const scrollSpeed = reverse
    ? speed * speedMultiplier
    : -speed * speedMultiplier;
  const scrollStartPos =
    startPosition === 'negative'
      ? scrollHeight * -scrollSpeed * startPositionMultiplier
      : startPosition;

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
