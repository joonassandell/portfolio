import { type ElementAttributes } from '../LocomotiveScroll';
import { type HTMLMotionProps } from 'framer-motion';
import { type ImageProps } from 'next/image';
import { type UseParallaxOptions } from '@/lib/useParallax';

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
    | 'style'
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
  scrollImageSpeed?: UseParallaxOptions['speed'];
  scrollOffset?: UseParallaxOptions['offset'];
  scrollReverse?: UseParallaxOptions['reverse'];
  scrollSpeed?: UseParallaxOptions['speed'];
  src: string;
  style?: HTMLMotionProps<'div'>['style'];
  transition?: 'move' | 'clip';
}
