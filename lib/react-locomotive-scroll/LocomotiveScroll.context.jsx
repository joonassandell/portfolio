import { createContext, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import useResizeObserver from 'use-resize-observer';

export const LocomotiveScrollContext = createContext({
  scroll: null,
  isReady: false,
});

export function LocomotiveScrollProvider({
  children,
  options,
  containerRef,
  watch,
  onUpdate,
  location,
  onLocationChange,
}) {
  const { height: containerHeight } = useResizeObserver({ ref: containerRef });
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef(null);
  const [height] = useDebounce(containerHeight, 100);

  if (!watch) {
    console.warn(
      'react-locomotive-scroll: you did not add any props to watch. Scroll may have weird behaviours if the instance is not updated when the route changes',
    );
  }

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        const dataScrollContainer = document.querySelector(
          '[data-scroll-container]',
        );

        if (!dataScrollContainer) {
          console.warn(
            `react-locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.`,
          );
        }

        LocomotiveScrollRef.current = new LocomotiveScroll({
          el: dataScrollContainer ?? undefined,
          ...options,
        });

        setIsReady(true); // Re-render the context
      } catch (error) {
        throw Error(`react-locomotive-scroll: ${error}`);
      }
    })();

    return () => {
      LocomotiveScrollRef.current?.destroy();
      setIsReady(false);
    };
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
  }, [location]);

  return (
    <LocomotiveScrollContext.Provider
      value={{ scroll: LocomotiveScrollRef.current, isReady }}
    >
      {children}
    </LocomotiveScrollContext.Provider>
  );
}

LocomotiveScrollContext.displayName = 'LocomotiveScrollContext';
LocomotiveScrollProvider.displayName = 'LocomotiveScrollProvider';