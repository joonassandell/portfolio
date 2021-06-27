import { useMedia } from 'react-use';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { mq, ease, scrollToDuration } from './config';

/**
 * Info: https://stackoverflow.com/a/55686711
 */
const useScrollTo = () => {
  const mobile = useMedia(mq.mobile);
  const { scroll } = useLocomotiveScroll();

  const scrollTo = (offset, callback) => {
    if (mobile) {
      window.scroll({ top: offset, behavior: 'smooth' });
      callback ? callback() : false;
    } else {
      scroll &&
        scroll.scrollTo(offset, {
          duration: scrollToDuration,
          ease,
          callback: () => {
            callback ? callback() : false;
          },
        });
    }
  };

  return scrollTo;
};

export default useScrollTo;
