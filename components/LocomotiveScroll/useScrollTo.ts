import { EASE, SCROLL_TO_DURATION } from '@/lib/config';
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
      if (scrollLock) scroll.stop();
      scroll.scrollTo(el, {
        callback: () => {
          if (callback) {
            setTimeout(() => {
              callback();
            }, callbackDelay);
          }
        },
        duration: SCROLL_TO_DURATION,
        easing: EASE,
      });
    }
  };

  return scrollTo;
};
