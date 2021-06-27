import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useAppContext } from '../containers/App';
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
  if (isInView) ref.current.classList.add('is-inScrollView');
  if (isInView) console.log('In view:', ref.current);

  return isInView;
};

const useInView = (ref, id) => {
  const { scroll } = useLocomotiveScroll();
  const [inView, setInView] = useState(false);
  const mobile = useMedia(mq.mobile);
  const { appState } = useAppContext();
  const { templateTransition, transition } = appState;
  const transitions = templateTransition || transition;

  useEffect(() => {
    if (mobile && !transitions) {
      isInView(ref) ? setInView(true) : false;
    }
  }, [mobile, ref.current, transitions]);

  if (scroll) {
    scroll.on('scroll', args =>
      isInScrollView(args, id, () => setInView(true)),
    );
  }

  return inView;
};

export default useInView;
