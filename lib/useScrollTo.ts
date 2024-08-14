import { SCROLL_TO_DURATION, SCROLL_TO_EASE } from '@/lib/config';
import { useLenis } from '@studio-freight/react-lenis';

export const useScrollTo = ({
  scrollLock = false,
}: {
  scrollLock?: boolean;
} = {}) => {
  const lenis = useLenis();

  const scrollTo = (el: HTMLElement | number, callback?: () => void) => {
    if (!lenis) return;

    lenis.scrollTo(el, {
      duration: SCROLL_TO_DURATION,
      easing: SCROLL_TO_EASE,
      lock: scrollLock,
      onComplete: () => {
        if (scrollLock) lenis.stop();
        callback && callback();
      },
    });
  };

  return scrollTo;
};
