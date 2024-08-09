import { type MutableRefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import useResizeObserver from 'use-resize-observer';

export const useParallax = (
  ref: MutableRefObject<null>,
  {
    distance = [0],
    reverse = false,
    speed = 0.5,
  }: {
    distance?: number[];
    reverse?: boolean;
    speed?: number;
  },
) => {
  const { scrollYProgress } = useScroll({
    // offset: ['end start', 'start end'],
    offset: ['start end', 'end start'],
    target: ref,
  });
  const { height = 0 } = useResizeObserver({ ref });
  const scrollSpeed = reverse ? speed : -speed;

  // const spring = useSpring(scrollYProgress, {
  //   damping: 40,
  //   restSpeed: 1,
  //   stiffness: 500,
  // });

  return {
    value: useTransform(
      scrollYProgress,
      [0, 1],
      [
        distance[0],
        distance[1] ? distance[1] * scrollSpeed : height * scrollSpeed,
      ],
    ),
  };
};
