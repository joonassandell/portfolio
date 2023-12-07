import { useState, useRef } from 'react';
import { SCROLL_SPEED } from '@/lib/config';
import { isString } from '@/lib/utility';
import { default as NextImage } from 'next/image';
import { AnimatePresence, m } from 'framer-motion';
import { useInView, useInViewVideo } from '@/lib/useInView';
import c from 'clsx';
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
  scroll = false,
  scrollDelay,
  scrollImageSpeed = SCROLL_SPEED * -2,
  scrollOffset = 0,
  scrollPosition,
  scrollPrevent,
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
  scroll = scroll || mask;
  scrollSpeed === 'negative'
    ? (scrollSpeed = -SCROLL_SPEED)
    : (scrollSpeed = scrollSpeed);

  // Stop caching images in development, uncomment if you keep testing new images
  // process.env.NODE_ENV === 'development' && (src = `${src}?${Date.now()}`);

  return (
    <div
      className={classes}
      data-s
      ref={ref}
      style={{
        ['--Figure-bg-color']: isString(background) ? background : undefined,
        ['--Figure-border-color']: isString(border) ? border : undefined,
        ['--Figure-border-radius']: isString(borderRadius)
          ? borderRadius
          : undefined,
      }}
      {...(scroll && scrollPrevent && { 'data-s-prevent': true })}
      {...(scroll && mask && { 'data-s-id': id })}
      {...(scroll && scrollSpeed && { 'data-s-speed': scrollSpeed })}
      {...(scrollOffset && { 'data-s-offset': scrollOffset })}
      {...(scrollPosition && { 'data-s-position': scrollPosition })}
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
              sizes={sizes}
              src={src}
              width={width}
              quality={quality}
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
