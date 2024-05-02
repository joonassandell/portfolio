import {
  type default as Scroll,
  type ScrollElement,
  type InstanceOptions,
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
export interface InstanceEvents {
  scroll: {
    stop: boolean;
  };
}

/**
 * https://github.com/locomotivemtl/locomotive-scroll?tab=readme-ov-file#element-attributes
 */
export interface ElementAttributes
  extends Omit<ScrollElement, 'offset' | 'position' | 'call'> {
  call: string;
  offset: ScrollElement['offset'] | 'top' | 'bottom';
  position: ScrollElement['position'] | 'top' | 'bottom' | 'left' | 'right';
}

export interface ScrollProps extends InstanceEvents, Scroll {}

export interface LocomotiveScrollContextProps {
  isReady: boolean;
  scroll: ScrollProps | null;
}

export interface LocomotiveScrollProviderProps extends PropsWithChildren {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  location?: string;
  onLocationChange?: (scroll: ScrollProps) => void;
  onUpdate?: (scroll: ScrollProps) => void;
  options: InstanceOptions;
  watch: DependencyList | undefined;
}

export { InstanceOptions };
