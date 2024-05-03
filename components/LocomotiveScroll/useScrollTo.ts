import { EASE, SCROLL_TO_DURATION } from '@/lib/config';
import { useLocomotiveScroll } from './';

export const useScrollTo = (
  {
    scrollLock,
    callbackDelay,
  }: {
    callbackDelay?: number;
    scrollLock?: boolean;
  } = {
    scrollLock: false,
    callbackDelay: 0,
  },
) => {
  const { scroll } = useLocomotiveScroll();

  const scrollTo = (el: HTMLElement | number, callback?: () => void) => {
    if (scroll) {
      if (scrollLock) scroll.stop();
      scroll.scrollTo(el, {
        duration: SCROLL_TO_DURATION,
        easing: EASE as [number, number, number, number],
        callback: () => {
          if (callback) {
            setTimeout(() => {
              callback();
            }, callbackDelay);
          }
        },
      });
    }
  };

  return scrollTo;
};
