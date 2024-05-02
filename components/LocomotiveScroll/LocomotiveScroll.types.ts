import {
  type default as Scroll,
  type InstanceOptions as LocomotiveScrollOptions,
} from 'locomotive-scroll';
import {
  type MutableRefObject,
  type DependencyList,
  type PropsWithChildren,
} from 'react';

/**
 * Add more of these if needed
 * https://github.com/antoinelin/react-locomotive-scroll/blob/main/lib/%40types/locomotive-scroll.d.ts#L92
 */
export type LocomotiveScrollInstanceEvents = {
  scroll: {
    stop: boolean;
  };
};

export interface LocomotiveScrollProps
  extends LocomotiveScrollInstanceEvents,
    Scroll {}

export interface LocomotiveScrollContextProps {
  isReady: boolean;
  scroll: LocomotiveScrollProps | null;
}

export interface LocomotiveScrollProviderProps extends PropsWithChildren {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  location?: string;
  onLocationChange?: (scroll: LocomotiveScrollProps) => void;
  onUpdate?: (scroll: LocomotiveScrollProps) => void;
  options: LocomotiveScrollOptions;
  watch: DependencyList | undefined;
}
