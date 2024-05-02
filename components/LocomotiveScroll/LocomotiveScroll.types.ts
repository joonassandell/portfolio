import {
  type default as Scroll,
  type InstanceOptions as LocomotiveScrollOptions,
} from 'locomotive-scroll';
import {
  type MutableRefObject,
  type DependencyList,
  type PropsWithChildren,
} from 'react';

// https://github.com/antoinelin/react-locomotive-scroll/blob/main/lib/%40types/locomotive-scroll.d.ts#L92
type LocomotiveScrollInstanceEvents = {
  scroll: {
    stop: boolean;
  };
};

export interface LocomotiveScrollContextProps {
  isReady: boolean;
  scroll: (Scroll & LocomotiveScrollInstanceEvents) | null;
}

export interface LocomotiveScrollProviderProps extends PropsWithChildren {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  location?: string;
  onLocationChange?: (scroll: Scroll) => void;
  onUpdate?: (scroll: Scroll) => void;
  options: LocomotiveScrollOptions;
  watch: DependencyList | undefined;
}

export { Scroll };
