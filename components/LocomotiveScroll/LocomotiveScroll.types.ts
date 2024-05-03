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
 * Add more of these if needed by inspecting the "Smooth" scroll instance with
 * the dev tools
 *
 * https://github.com/locomotivemtl/locomotive-scroll/blob/master/src/scripts/Smooth.js
 * https://github.com/antoinelin/react-locomotive-scroll/blob/main/lib/%40types/locomotive-scroll.d.ts
 */
export interface InstanceProps {
  scroll: {
    stop: boolean;
    instance: {
      limit: {
        x: number;
        y: number;
      };
    };
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

export interface ScrollProps extends InstanceProps, Scroll {}

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
