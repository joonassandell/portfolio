import { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from 'lodash-es';
import { isBrowser } from '@/lib/utils';
import {
  type LocomotiveScrollContextProps,
  type LocomotiveScrollProviderProps,
  type ScrollProps,
} from './';
import useResizeObserver, { type ObservedSize } from 'use-resize-observer';

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
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef<ScrollProps | null>(null);
  const [{ height }, setSize] = useState<ObservedSize>({
    height: undefined,
    width: undefined,
  });
  useResizeObserver({
    onResize: useMemo(() => debounce(setSize, 100), []),
    ref: containerRef,
  });

  const dataScrollContainer =
    isBrowser &&
    (document.querySelector('[data-scroll-container]') as HTMLElement);

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        LocomotiveScrollRef.current = new LocomotiveScroll({
          ...options,
        }) as ScrollProps;

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

      LocomotiveScrollRef.current.resize();

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

    LocomotiveScrollRef.current.resize();
    LocomotiveScrollRef.current.addScrollElements(dataScrollContainer);

    if (onLocationChange) {
      onLocationChange(LocomotiveScrollRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <LocomotiveScrollContext.Provider
      value={{
        isReady,
        scroll: LocomotiveScrollRef.current,
      }}
    >
      {children}
    </LocomotiveScrollContext.Provider>
  );
};
