import { useMedia } from 'react-use';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { mq, ease, scrollToDuration } from './config';

/**
 * Info: https://stackoverflow.com/a/55686711
 */
const useScrollTo = () => {
  const mobile = useMedia(mq.mobile);
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
