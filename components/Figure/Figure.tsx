import { AnimatePresence, m } from 'framer-motion';
import {
  clipVariants,
  type FigureProps,
  glareVariants,
  moveVariants,
  placeholderGlareVariants,
  placeholderVariants,
} from './';
import { isString } from '@/lib/utils';
import { JUMP_FIX_VARIANTS, SCROLL_SPEED } from '@/lib/config';
import { default as NextImage } from 'next/image';
import { useApp } from '@/components/App';
import { useInView, useInViewVideo } from '@/lib/useInView';
import { useRef, useState } from 'react';
import c from 'clsx';

export const Figure = ({
  alt,
  animate = true,
  background,
  border,
  borderRadius = true,
  className,
  glare,
  height,
  id,
  inline,
  inViewOffset = 0.1,
  loading,
  placeholder = true,
  priority,
  quality,
  scroll,
  scrollDelay,
  scrollImageSpeed = SCROLL_SPEED * -2,
  scrollOffset,
  scrollPosition,
  scrollSpeed = SCROLL_SPEED,
  sizes = '100vw',
  src,
  transition = 'move',
  unoptimized,
  width,
}: FigureProps) => {
  const { transition: appTransition } = useApp();
  const mask = scroll === 'mask';
  const classes = c(className, 'Figure', {
    '-bg': background,
    '-border': border,
    '-border:radius': borderRadius,
    '-inline': inline,
    '-mask': mask,
  });
  id = id ?? src?.split('/')?.pop()?.split('.')[0];
  const ref = useRef(null);
  const figureVariants = transition === 'move' ? moveVariants : clipVariants;
  const inView = useInView(ref, inViewOffset);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [glareEnd, setGlareEnd] = useState(false);
  const isVideo = src && src.indexOf('mp4') > -1;
  const refVideo = useRef(null);
  useInViewVideo(refVideo, inViewOffset);
  scrollSpeed === 'negative'
    ? (scrollSpeed = -SCROLL_SPEED)
    : (scrollSpeed = scrollSpeed);

  // Stop caching images in development, uncomment if you keep testing new images
  // process.env.NODE_ENV === 'development' && (src = `${src}?${Date.now()}`);

  return (
    <m.div
      className={classes}
      ref={ref}
      style={{
        ['--Figure-bg' as string]: isString(background)
          ? background
          : undefined,
        ['--Figure-border' as string]: isString(border) ? border : undefined,
        ['--Figure-border-radius' as string]: isString(borderRadius)
          ? borderRadius
          : undefined,
      }}
      {...(scroll && { 'data-scroll': true })}
      {...(scroll && scrollSpeed && { 'data-scroll-speed': scrollSpeed })}
      {...(scroll && scrollOffset && { 'data-scroll-offset': scrollOffset })}
      {...(scroll &&
        scrollPosition && { 'data-scroll-position': scrollPosition })}
      {...(scroll && scrollDelay && { 'data-scroll-delay': scrollDelay })}
      {...(mask && { 'data-scroll-id': id })}
      {...(mask &&
        appTransition === 'template' &&
        scrollPosition != 'top' && {
          animate: 'animate',
          initial: 'initial',
          variants: JUMP_FIX_VARIANTS,
        })}
    >
      <figure
        className="Figure-figure"
        {...(mask && {
          'data-scroll': true,
          'data-scroll-prevent': true,
          'data-scroll-speed': scrollImageSpeed,
          'data-scroll-target': `[data-scroll-id="${id}"]`,
        })}
        {...(mask &&
          scrollPosition && { 'data-scroll-position': scrollPosition })}
        {...(mask && scrollDelay && { 'data-scroll-delay': scrollDelay })}
      >
        <m.div
          className="Figure-figure-main"
          {...(animate && {
            animate: inView ? 'animate' : '',
            initial: 'initial',
            variants: figureVariants,
          })}
        >
          {glare && !glareEnd && (
            <m.div
              className="Figure-glare"
              onAnimationComplete={() => setGlareEnd(true)}
              variants={glareVariants}
            />
          )}
          {!isVideo && placeholder && (
            <AnimatePresence>
              {!imgLoaded && (
                <m.div
                  className="Figure-placeholder"
                  exit="exit"
                  variants={placeholderVariants}
                >
                  <m.div
                    animate={inView ? 'animate' : false}
                    className="Figure-placeholder-glare"
                    variants={placeholderGlareVariants}
                  />
                </m.div>
              )}
            </AnimatePresence>
          )}
          {!isVideo && (
            <NextImage
              alt={alt}
              className="Figure-img"
              draggable="false"
              height={height}
              loading={loading}
              onLoad={() => setImgLoaded(true)}
              priority={priority}
              quality={quality}
              sizes={sizes}
              src={src}
              unoptimized={unoptimized}
              width={width}
            />
          )}
          {isVideo && (
            <video
              className="Figure-video"
              loop
              muted
              playsInline
              ref={refVideo}
            >
              <source src={src} />
            </video>
          )}
          {isVideo && <figcaption className="hideVisually">{alt}</figcaption>}
        </m.div>
      </figure>
    </m.div>
  );
};
