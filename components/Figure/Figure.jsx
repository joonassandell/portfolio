import { useState, useRef } from 'react';
import { SCROLL_SPEED as sSpeed } from '@/lib/config';
import { isString } from '@/lib/utility';
import { default as NextImage } from 'next/image';
import { AnimatePresence, m } from 'framer-motion';
import { useInView, useInViewVideo } from '@/lib/useInView';
import { useIsMobile } from '@/lib/useIsMobile';
import c from 'classnames';
import {
  clipVariants,
  moveVariants,
  glareVariants,
  placeholderVariants,
  placeholderGlareVariants,
} from './Figure.animations';

export const Figure = ({
  alt,
  background,
  border,
  borderRadius = true,
  className,
  glare,
  height,
  mask = false,
  priority = false,
  scrollDelay,
  scrollImageSpeed = -3,
  scrolling = true,
  scrollOffset,
  scrollPosition,
  scrollSpeed = sSpeed,
  sizes = '100vw',
  src,
  transition = 'move',
  width,
  quality,
}) => {
  const classes = c(className, 'Figure', {
    '-mask': mask,
    '-bg': background,
    '-border': border,
    '-border:radius': borderRadius,
  });
  const id = src.split('/').pop().split('.')[0];
  const ref = useRef(null);
  const isMobile = useIsMobile();

  // Stop caching images in development, uncomment if you keep testing new images
  // process.env.NODE_ENV === 'development' && (src = `${src}?${Date.now()}`);

  // 1.'-25%': Maybe start the scroll effect a bit earlier by default for masks
  const offset =
    scrollOffset || scrollOffset === 0
      ? scrollOffset
      : mask && isMobile
      ? 0
      : mask
      ? 0 // [1.]
      : 0;
  const inView = useInView(ref, offset);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const isVideo = src && src.indexOf('mp4') > -1;
  const refVideo = useRef(null);
  useInViewVideo(refVideo, offset);

  let figureVariants =
    transition === 'move'
      ? moveVariants
      : transition === 'clip'
      ? clipVariants
      : '';

  return (
    <div
      className={classes}
      data-scroll
      ref={ref}
      style={{
        ['--Figure-bg-color']: isString(background) ? background : undefined,
        ['--Figure-border-color']: isString(border) ? border : undefined,
      }}
      {...(scrolling && mask && { 'data-scroll-id': id })}
      {...(scrolling && scrollSpeed && { 'data-scroll-speed': scrollSpeed })}
      {...(offset && { 'data-scroll-offset': offset })}
      {...(scrollPosition && { 'data-scroll-position': scrollPosition })}
      {...(scrolling && scrollDelay && { 'data-scroll-delay': scrollDelay })}
    >
      <figure
        className="Figure-figure"
        {...(scrolling && mask && { 'data-scroll': true })}
        {...(scrolling && mask && { 'data-scroll-speed': scrollImageSpeed })}
        {...(scrolling &&
          mask && { 'data-scroll-target': `[data-scroll-id="${id}"]` })}
        {...(scrolling &&
          scrollPosition && { 'data-scroll-position': scrollPosition })}
        {...(scrolling && scrollDelay && { 'data-scroll-delay': scrollDelay })}
      >
        <m.div
          animate={inView ? 'animate' : ''}
          className="Figure-figure-main"
          initial="initial"
          variants={figureVariants}
        >
          {glare && <m.div className="Figure-glare" variants={glareVariants} />}
          {!isVideo && !priority && (
            <AnimatePresence>
              {!imageIsLoaded && (
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
              onLoadingComplete={() => setImageIsLoaded(true)}
              priority={priority}
              quality={quality}
              sizes={sizes}
              src={src}
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
              title={alt}
            >
              <source src={src} />
            </video>
          )}
        </m.div>
      </figure>
    </div>
  );
};
