import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { ease, scrollToDuration } from './config';
import useIsMobile from './useIsMobile';
import { useAppContext } from '@/containers/App';

/**
 * https://stackoverflow.com/a/55686711
 */
const useScrollTo = () => {
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
            !isNumber && setScrollLock(true);
            callback && callback();
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
      scroll &&
        scroll.scrollTo(el, {
          duration: scrollToDuration,
          ease,
          callback: () => {
            callback && callback();
          },
        });
    }
  };

  return scrollTo;
};

export default useScrollTo;
