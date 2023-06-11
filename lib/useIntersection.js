import { useRef, useState, useEffect } from 'react';
import shallowEqual from 'shallowequal';

/**
 * Copypaste and conversion to js of the following:
 * https://github.com/cats-oss/use-intersection/blob/master/src/index.ts
 *
 * Originals react dependency hasn't been updated in a while:
 * https://github.com/cats-oss/use-intersection/issues/143
 *
 * Can't use the react-use version because it's not triggering sometimes:
 * https://github.com/streamich/react-use/issues/2359
 * https://github.com/streamich/react-use/issues/2376
 */
export const useIntersection = (target, options = {}, callback) => {
  const { defaultIntersecting, once, ...opts } = options;
  const optsRef = useRef(opts);
  const [intersecting, setIntersecting] = useState(
    defaultIntersecting === true,
  );
  const intersectedRef = useRef(false);

  useEffect(() => {
    if (!shallowEqual(optsRef.current, opts)) {
      optsRef.current = opts;
    }
  });

  useEffect(() => {
    if (target == null) {
      return;
    }

    const element = target instanceof Element ? target : target.current;
    if (element == null) {
      return;
    }

    if (once && intersectedRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[entries.length - 1];
        setIntersecting(entry.isIntersecting);

        if (callback != null) {
          callback(entry);
        }

        if (entry.isIntersecting) {
          intersectedRef.current = true;
        }

        if (once && entry.isIntersecting && element != null) {
          observer.unobserve(element);
        }
      },
      {
        ...optsRef.current,
        root:
          optsRef.current.root != null ? optsRef.current.root.current : null,
      },
    );

    observer.observe(element);

    return () => {
      if (once && intersectedRef.current) {
        return;
      }

      if (element != null) {
        observer.unobserve(element);
      }
    };
  }, [optsRef.current, target]);

  return intersecting;
};
