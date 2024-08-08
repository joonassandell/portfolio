import { SCROLL_TO_DURATION, SCROLL_TO_EASE } from '@/lib/config';
import { useLocomotiveScroll } from './';

export const useScrollTo = (
  {
    callbackDelay,
    scrollLock,
  }: {
    callbackDelay?: number;
    scrollLock?: boolean;
  } = {
    callbackDelay: 0,
    scrollLock: false,
  },
) => {
  const { scroll } = useLocomotiveScroll();

  const scrollTo = (el: HTMLElement | number, callback?: () => void) => {
    if (scroll) {
      scroll.scrollTo(el, {
        duration: SCROLL_TO_DURATION,
        easing: SCROLL_TO_EASE,
        lock: scrollLock,
        onComplete: () => {
          if (scrollLock) scroll.stop();
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
