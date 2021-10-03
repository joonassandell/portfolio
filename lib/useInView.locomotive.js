import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useAppContext } from '@/containers/App';
import useIsMobile from '@/lib/useIsMobile';

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

/**
 * Usage:
 * import { useCallbackRef } from 'use-callback-ref';
 * const ref = useCallbackRef(null, ref => ref);
 * const rulerInView = useInView(ref, 'id');
 * <div data-scroll data-scroll-id="id" />
 */
const useInView = (ref, id) => {
  const { scroll } = useLocomotiveScroll();
  const [inView, setInView] = useState(false);
  const mobile = useIsMobile();
  const {
    appState: { transition },
  } = useAppContext();

  useEffect(() => {
    if (mobile && !transition) {
      isInView(ref) ? setInView(true) : false;
    }
  }, [mobile, ref.current, transition]);

  if (scroll) {
    scroll.on('scroll', args =>
      isInScrollView(args, id, () => setInView(true)),
    );
  }

  return inView;
};

export default useInView;