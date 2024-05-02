import { useLocomotiveScroll } from './';
import { EASE, SCROLL_TO_DURATION } from '@/lib/config';

export const useScrollTo = (
  { scrollLock, callbackDelay } = {
    scrollLock: false,
    callbackDelay: 0,
  },
) => {
  const { scroll } = useLocomotiveScroll();

  const scrollTo = (el, callback) => {
    if (scroll) {
      if (scrollLock) scroll.stop();
      scroll.scrollTo(el, {
        duration: SCROLL_TO_DURATION,
        easing: EASE,
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