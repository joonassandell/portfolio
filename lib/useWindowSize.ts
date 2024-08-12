import { isBrowser } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const useWindowSize = (
  initialWidth = Infinity,
  initialHeight = Infinity,
) => {
  const [state, setState] = useState<{
    clientHeight: number;
    clientWidth: number;
    height: number;
    width: number;
  }>({
    clientHeight: isBrowser
      ? document.documentElement.clientHeight
      : initialHeight,
    clientWidth: isBrowser
      ? document.documentElement.clientWidth
      : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
    width: isBrowser ? window.innerWidth : initialWidth,
  });

  useEffect(() => {
    if (!isBrowser) return;

    const handler = () => {
      setState({
        clientHeight: document.documentElement.clientHeight,
        clientWidth: document.documentElement.clientWidth,
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  return state;
};
