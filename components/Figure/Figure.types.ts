import { type ElementAttributes } from '../LocomotiveScroll';
import { type ImageProps } from 'next/image';

export interface FigureProps
  extends Omit<
    ImageProps,
    | 'src'
    | 'placeholder'
    | 'fill'
    | 'blurDataURL'
    | 'onLoadingComplete'
    | 'layout'
    | 'objectFit'
    | 'objectPosition'
    | 'lazyBoundary'
    | 'lazyRoot'
  > {
  animate?: boolean;
  background?: string | boolean;
  border?: string | boolean;
  borderRadius?: string | boolean;
  glare?: boolean;
  id?: ElementAttributes['id'];
  inViewOffset?: number;
  inline?: boolean;
  placeholder?: boolean;
  scroll?: boolean | 'mask';
  scrollDelay?: number;
  scrollImageSpeed?: number;
  scrollOffset?: ElementAttributes['offset'];
  scrollPosition?: ElementAttributes['position'];
  scrollSpeed?: ElementAttributes['speed'] | 'negative';
  src: string;
  transition?: 'move' | 'clip';
}
