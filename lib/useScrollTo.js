import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { ease, scrollToDuration } from './config';
import useIsMobile from './useIsMobile';

/**
 * https://stackoverflow.com/a/55686711
 */
const useScrollTo = () => {
  const mobile = useIsMobile();
  const { scroll } = useLocomotiveScroll();

  const scrollTo = (el, callback) => {
    if (mobile) {
      el.scrollIntoView({ behavior: 'smooth' });
      callback && callback();
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
