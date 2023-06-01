import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { ease, scrollToDuration } from './config';
import { useIsMobile } from './useIsMobile';
import { useAppContext } from '@/components/App';

/**
 * https://stackoverflow.com/a/55686711
 */
export const useScrollTo = (
  { scrollLock, callbackDelay } = {
    scrollLock: false,
    callbackDelay: 0,
  },
) => {
  const mobile = useIsMobile();
  const { scroll } = useLocomotiveScroll();
  const { setScrollLock } = useAppContext();

  const scrollTo = (el, callback) => {
    if (mobile) {
      const isNumber = typeof el === 'number';

      if (callback) {
        const onScroll = () => {
          const elOrOffset = isNumber ? el : el.offsetTop;

          if (window.scrollY === elOrOffset) {
            window.removeEventListener('scroll', onScroll);
            scrollLock && setScrollLock(true);
            setTimeout(() => {
              callback();
            }, callbackDelay);
          }
        };

        window.addEventListener('scroll', onScroll);
        onScroll();
      }

      if (isNumber) {
        window.scroll({ top: el, behavior: 'smooth' });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (scroll) {
        if (scrollLock) scroll.stop();
        scroll.scrollTo(el, {
          duration: scrollToDuration,
          easing: ease,
          callback: () => {
            if (callback) {
              setTimeout(() => {
                callback();
              }, callbackDelay);
            }
          },
        });
      }
    }
  };

  return scrollTo;
};
