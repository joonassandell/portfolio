import { createContext, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import useResizeObserver from 'use-resize-observer';
import {
  type LocomotiveScrollContextProps,
  type LocomotiveScrollProviderProps,
  type LocomotiveScrollProps,
} from './';

export const LocomotiveScrollContext =
  createContext<LocomotiveScrollContextProps>({
    isReady: false,
    scroll: null,
  });

export const LocomotiveScrollProvider = ({
  children,
  containerRef,
  location,
  onLocationChange,
  onUpdate,
  options,
  watch,
}: LocomotiveScrollProviderProps) => {
  const { height: containerHeight } = useResizeObserver({ ref: containerRef });
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef<LocomotiveScrollProps | null>(null);
  const [height] = useDebounce(containerHeight, 100);

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        const dataScrollContainer = document.querySelector(
          '[data-s-container]',
        ) as HTMLElement;

        LocomotiveScrollRef.current = new LocomotiveScroll({
          el: dataScrollContainer ?? undefined,
          ...options,
        }) as LocomotiveScrollProps;

        setIsReady(true); // Re-render the context
      } catch (error) {
        throw Error(`LocomotiveScroll: ${error}`);
      }
    })();

    return () => {
      LocomotiveScrollRef.current?.destroy();
      setIsReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => {
      if (!LocomotiveScrollRef.current) {
        return;
      }

      LocomotiveScrollRef.current.update();

      if (onUpdate) {
        onUpdate(LocomotiveScrollRef.current);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    watch ? [...watch, height] : [height],
  );

  useEffect(() => {
    if (!LocomotiveScrollRef.current || !location) {
      return;
    }

    LocomotiveScrollRef.current.update();

    if (onLocationChange) {
      onLocationChange(LocomotiveScrollRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <LocomotiveScrollContext.Provider
      value={{
        scroll: LocomotiveScrollRef.current,
        isReady,
      }}
    >
      {children}
    </LocomotiveScrollContext.Provider>
  );
};
