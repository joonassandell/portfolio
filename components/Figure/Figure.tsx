import { AnimatePresence, m } from 'framer-motion';
import {
  clipVariants,
  type FigureProps,
  glareVariants,
  moveVariants,
  placeholderGlareVariants,
  placeholderVariants,
} from './';
import { forwardRef, type RefObject, useRef, useState } from 'react';
import { isString } from '@/lib/utils';
import { default as NextImage } from 'next/image';
import { useInView, useInViewVideo } from '@/lib/useInView';
import { useParallax } from '@/lib/useParallax';
import c from 'clsx';

export const Figure = forwardRef<HTMLDivElement, FigureProps>(
  (
    {
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
      scrollImageSpeed = 'fast',
      scrollMaxClientHeight,
      scrollOffset,
      scrollReverse,
      scrollSpeed,
      scrollSpeedMultiplier,
      scrollStartPosition = 'negative',
      sizes = '100vw',
      src,
      transition = 'move',
      unoptimized,
      width,
      ...props
    },
    forwardedRef,
  ) => {
    const mask = scroll === 'mask';
    const negativeStartPosition =
      scrollStartPosition === 'negative' && scrollOffset != 'start-start';
    const classes = c(className, 'Figure', {
      '-bg': background,
      '-border': border,
      '-border:radius': borderRadius,
      '-inline': inline,
      '-mask': mask,
    });
    id = id ?? src?.split('/')?.pop()?.split('.')[0];
    const createdRef = useRef(null);
    const ref = (forwardedRef as RefObject<HTMLDivElement>) ?? createdRef;
    const figureVariants = transition === 'move' ? moveVariants : clipVariants;
    const inView = useInView(ref, inViewOffset);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [glareEnd, setGlareEnd] = useState(false);
    const isVideo = src && src.indexOf('mp4') > -1;
    const refVideo = useRef(null);
    useInViewVideo(refVideo, inViewOffset);

    const { value: y } = useParallax({
      maxClientHeight: scrollMaxClientHeight,
      offset: scrollOffset,
      ref,
      reverse: scrollReverse,
      speed: scrollSpeed,
      speedMultiplier: scrollSpeedMultiplier,
      startPosition: negativeStartPosition ? scrollStartPosition : 0,
    });

    const { value: maskY } = useParallax({
      maxClientHeight: scrollMaxClientHeight,
      offset: scrollOffset,
      ref,
      reverse: true,
      speed: scrollImageSpeed,
      speedMultiplier: scrollSpeedMultiplier,
      startPosition: negativeStartPosition ? scrollStartPosition : 0,
    });

    // Stop caching images in development, uncomment if you keep testing new images
    // process.env.NODE_ENV === 'development' && (src = `${src}?${Date.now()}`);

    return (
      <m.div
        className={classes}
        id={id}
        ref={ref}
        style={{
          ['--Figure-bg' as string]: isString(background)
            ? background
            : undefined,
          ['--Figure-border' as string]: isString(border) ? border : undefined,
          ['--Figure-border-radius' as string]: isString(borderRadius)
            ? borderRadius
            : undefined,
          y: scroll ? y : 0,
          ...props.style,
        }}
      >
        <m.figure className="Figure-figure" style={{ y: mask ? maskY : 0 }}>
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
                draggable={false}
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
        </m.figure>
      </m.div>
    );
  },
);

Figure.displayName = 'Figure';
