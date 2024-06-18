import { AnimatePresence, m } from 'framer-motion';
import {
  clipVariants,
  type FigureProps,
  glareVariants,
  moveVariants,
  placeholderGlareVariants,
  placeholderVariants,
} from './';
import { DEVELOPMENT, SCROLL_SPEED } from '@/lib/config';
import { isString } from '@/lib/utils';
import { default as NextImage } from 'next/image';
import { useInView, useInViewVideo } from '@/lib/useInView';
import { useRef, useState } from 'react';
import c from 'clsx';

export const Figure = ({
  alt,
  background,
  border,
  borderRadius = true,
  className,
  glare,
  height,
  id,
  inViewOffset = 0.1,
  loading,
  mask,
  placeholder = true,
  priority,
  quality,
  scroll,
  scrollDelay,
  scrollImageSpeed = SCROLL_SPEED * -2,
  scrollOffset,
  scrollPosition,
  scrollPrevent,
  scrollSpeed = SCROLL_SPEED,
  sizes = '100vw',
  src,
  transition = 'move',
  unoptimized,
  width,
}: FigureProps) => {
  const classes = c(className, 'Figure', {
    '-bg': background,
    '-border': border,
    '-border:radius': borderRadius,
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
  scroll = scroll ?? mask; // Scrolling should be enabled if mask is set
  scrollSpeed === 'negative'
    ? (scrollSpeed = -SCROLL_SPEED)
    : (scrollSpeed = scrollSpeed);

  // Stop caching images in development, uncomment if you keep testing new images
  // DEVELOPMENT && (src = `${src}?${Date.now()}`);

  return (
    <div
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
      {...(mask && { 'data-s-id': id })}
      {...(scroll && { 'data-s': true })}
      {...(scroll && scrollPrevent && { 'data-s-prevent': true })}
      {...(scroll && scrollSpeed && { 'data-s-speed': scrollSpeed })}
      {...(scroll && scrollOffset && { 'data-s-offset': scrollOffset })}
      {...(scroll && scrollPosition && { 'data-s-position': scrollPosition })}
      {...(scroll && scrollDelay && { 'data-s-delay': scrollDelay })}
    >
      <figure
        className="Figure-figure"
        {...(mask && { 'data-s': true })}
        {...(mask && { 'data-s-speed': scrollImageSpeed })}
        {...(mask && { 'data-s-target': `[data-s-id="${id}"]` })}
        {...(mask && scrollPosition && { 'data-s-position': scrollPosition })}
        {...(mask && scrollDelay && { 'data-s-delay': scrollDelay })}
      >
        <m.div
          animate={inView ? 'animate' : ''}
          className="Figure-figure-main"
          initial="initial"
          variants={figureVariants}
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
    </div>
  );
};
