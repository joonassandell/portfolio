import { useState, useRef } from 'react';
import { SCROLL_SPEED } from '@/lib/config';
import { isString } from '@/lib/utility';
import { default as NextImage } from 'next/image';
import { AnimatePresence, m } from 'framer-motion';
import { useInView, useInViewVideo } from '@/lib/useInView';
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
  inViewOffset = 0.1,
  mask = false,
  priority = false,
  scroll = true,
  scrollDelay,
  scrollImageSpeed = -3,
  scrollOffset = 0,
  scrollPosition,
  scrollSpeed = SCROLL_SPEED,
  sizes = '100vw',
  src,
  transition = 'move',
  width,
  quality,
}) => {
  if (!src) {
    console.error('Figure: src is not defined');
    return null;
  }
  const classes = c(className, 'Figure', {
    '-mask': mask,
    '-bg': background,
    '-border': border,
    '-border:radius': borderRadius,
  });
  const id = src.split('/').pop().split('.')[0];
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
    <div
      className={classes}
      data-scroll
      ref={ref}
      style={{
        ['--Figure-bg-color']: isString(background) ? background : undefined,
        ['--Figure-border-color']: isString(border) ? border : undefined,
      }}
      {...(scroll && mask && { 'data-scroll-id': id })}
      {...(scroll && scrollSpeed && { 'data-scroll-speed': scrollSpeed })}
      {...(scrollOffset && { 'data-scroll-offset': scrollOffset })}
      {...(scrollPosition && { 'data-scroll-position': scrollPosition })}
      {...(scroll && scrollDelay && { 'data-scroll-delay': scrollDelay })}
    >
      <figure
        className="Figure-figure"
        {...(scroll && mask && { 'data-scroll': true })}
        {...(scroll && mask && { 'data-scroll-speed': scrollImageSpeed })}
        {...(scroll &&
          mask && { 'data-scroll-target': `[data-scroll-id="${id}"]` })}
        {...(scroll &&
          scrollPosition && { 'data-scroll-position': scrollPosition })}
        {...(scroll && scrollDelay && { 'data-scroll-delay': scrollDelay })}
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
          {!isVideo && !priority && (
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
              onLoadingComplete={() => setImgLoaded(true)}
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
