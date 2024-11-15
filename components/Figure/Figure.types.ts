import { type HTMLMotionProps } from 'motion/react';
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
  borderStyle?: 'solid' | 'dashed';
  fill?: 'large';
  glare?: boolean;
  id?: string;
  inViewOffset?: number;
  inline?: boolean;
  placeholder?: boolean;
  scroll?: boolean | 'mask';
  scrollImageSpeed?: UseParallaxOptions['speed'];
  scrollImageStartPosition?: UseParallaxOptions['startPosition'];
  scrollImageStartPositionMultiplier?: UseParallaxOptions['startPositionMultiplier'];
  scrollMaxClientHeight?: UseParallaxOptions['maxClientHeight'];
  scrollOffset?: UseParallaxOptions['offset'];
  scrollReverse?: UseParallaxOptions['reverse'];
  scrollSpeed?: UseParallaxOptions['speed'];
  scrollSpeedMultiplier?: UseParallaxOptions['speedMultiplier'];
  scrollStartPosition?: UseParallaxOptions['startPosition'];
  scrollStartPositionMultiplier?: UseParallaxOptions['startPositionMultiplier'];
  src: string;
  style?: HTMLMotionProps<'div'>['style'];
  transition?: 'move' | 'clip';
}
