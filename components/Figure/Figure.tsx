import { AnimatePresence, m } from 'framer-motion';
import {
  CLIP_VARIANTS,
  type FigureProps,
  GLARE_VARIANTS,
  MOVE_VARIANTS,
  PLACEHOLDER_GLARE_VARIANTS,
  PLACEHOLDER_VARIANTS,
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
      borderStyle,
      className,
      fill,
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
      scrollImageStartPosition,
      scrollImageStartPositionMultiplier,
      scrollMaxClientHeight,
      scrollOffset,
      scrollReverse,
      scrollSpeed,
      scrollSpeedMultiplier,
      scrollStartPosition = 'negative',
      scrollStartPositionMultiplier,
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
    const video = src && src.indexOf('mp4') > -1;
    const classes = c(className, 'Figure', {
      '-bg': background,
      '-border': border,
      '-border:dashed': borderStyle === 'dashed',
      '-border:radius:0': !borderRadius,
      '-fill:l': fill === 'large',
      '-inline': inline,
      '-transition:clip': transition === 'clip',
      '-video': video,
    });
    id = id ?? src?.split('/')?.pop()?.split('.')[0];
    const createdRef = useRef(null);
    const ref = (forwardedRef as RefObject<HTMLDivElement>) ?? createdRef;
    const figureVariants =
      transition === 'move' ? MOVE_VARIANTS : CLIP_VARIANTS;
    const inView = useInView(ref, inViewOffset);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [glareEnd, setGlareEnd] = useState(false);
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
      startPositionMultiplier: scrollStartPositionMultiplier,
    });

    const { value: maskY } = useParallax({
      maxClientHeight: scrollMaxClientHeight,
      offset: scrollOffset,
      ref,
      reverse: true,
      speed: scrollImageSpeed,
      speedMultiplier: scrollSpeedMultiplier,
      startPosition:
        scrollImageStartPosition ??
        (negativeStartPosition ? scrollStartPosition : 0),
      startPositionMultiplier: scrollImageStartPositionMultiplier,
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
        <m.div
          className="Figure-main"
          {...(animate && {
            animate: inView ? 'animate' : '',
            initial: 'initial',
            variants: figureVariants,
          })}
        >
          <m.figure className="Figure-figure" style={{ y: mask ? maskY : 0 }}>
            {glare && !glareEnd && (
              <m.div
                className="Figure-glare"
                onAnimationComplete={() => setGlareEnd(true)}
                variants={GLARE_VARIANTS}
              />
            )}
            {!video && placeholder && (
              <AnimatePresence>
                {!imgLoaded && (
                  <m.div
                    className="Figure-placeholder"
                    exit="exit"
                    variants={PLACEHOLDER_VARIANTS}
                  >
                    <m.div
                      animate={inView ? 'animate' : false}
                      className="Figure-placeholder-glare"
                      variants={PLACEHOLDER_GLARE_VARIANTS}
                    />
                  </m.div>
                )}
              </AnimatePresence>
            )}
            {!video && (
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
                // Fix possible leaking image under the placeholder
                {...(!imgLoaded && { style: { opacity: 0 } })}
              />
            )}
            {video && (
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
            {video && <figcaption className="hideVisually">{alt}</figcaption>}
          </m.figure>
        </m.div>
      </m.div>
    );
  },
);

Figure.displayName = 'Figure';
