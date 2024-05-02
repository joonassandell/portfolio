import { ImageProps } from 'next/image';
import { ElementAttributes } from '../LocomotiveScroll';

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
  background?: string;
  border?: string;
  borderRadius?: boolean;
  glare?: boolean;
  id?: ElementAttributes['id'];
  inViewOffset?: number;
  mask?: boolean;
  placeholder?: boolean;
  scroll?: boolean;
  src: string;
  scrollDelay?: number;
  scrollImageSpeed?: number;
  scrollOffset?: ElementAttributes['offset'];
  scrollPosition?: ElementAttributes['position'];
  scrollPrevent?: boolean;
  scrollSpeed?: ElementAttributes['speed'] | 'negative';
  transition?: 'move' | 'clip';
}
