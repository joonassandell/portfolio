import {
  type DependencyList,
  type MutableRefObject,
  type PropsWithChildren,
} from 'react';
import {
  type InstanceOptions,
  type default as Scroll,
  type ScrollElement,
} from 'locomotive-scroll';

/**
 * Add more of these if needed by inspecting the "Smooth" scroll instance with
 * the dev tools
 *
 * https://github.com/locomotivemtl/locomotive-scroll/blob/master/src/scripts/Smooth.js
 * https://github.com/antoinelin/react-locomotive-scroll/blob/main/lib/%40types/locomotive-scroll.d.ts
 */
export interface InstanceProps {
  scroll: {
    instance: {
      limit: {
        x: number;
        y: number;
      };
    };
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

export type { InstanceOptions };
