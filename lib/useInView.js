import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useMedia } from 'react-use';
import { mq } from './config';

const isInScrollView = (args, id, callback) => {
  const currentEl = typeof args.currentElements[id] === 'object';

  if (currentEl) {
    const domEl = args.currentElements[id].el;
    const hasBeenInView = domEl.classList.contains('is-inScrollView');

    if (!hasBeenInView) {
      domEl.classList.add('is-inScrollView');
      console.log('In scroll view:', args.currentElements[id].id);
      if (callback) callback();
    }
  }
};

const isInView = ref => {
  if (!ref.current) return;
  const isInView = ref.current.classList.contains('is-inview');
  ref.current.classList.add('is-inScrollView');
  if (isInView) console.log('In view:', ref.current);
  return isInView;
};

const useInView = (ref, id) => {
  const { scroll } = useLocomotiveScroll();
  const [inView, setInView] = useState(false);
  const mobile = useMedia(mq.mobile);

  useEffect(() => {
    if (mobile) {
      setTimeout(() => {
        isInView(ref) ? setInView(true) : false;
      }, 5);
    }
  }, [ref.current]);

  if (scroll) {
    scroll.on('scroll', args =>
      isInScrollView(args, id, () => setInView(true)),
    );
  }

  return inView;
};

export default useInView;
