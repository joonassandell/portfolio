import { useState, useRef } from 'react';
import { scrollSpeed as sSpeed, transTertiaryFastest } from '@/lib/config';
import { isString } from '@/lib/utility';
import { default as NextImage } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView, useInViewVideo } from '@/lib/useInView';
import { useIsMobile } from '@/lib/useIsMobile';
import { BlurhashCanvas } from 'react-blurhash';
import c from 'classnames';
import { clipVariants, moveVariants, maskVariants } from './Figure.animations';

export const Figure = ({
  alt,
  blurhash,
  background,
  border,
  borderRadius = true,
  className,
  height,
  mask = false,
  priority = false,
  scrollDelay,
  scrollImageSpeed = -3,
  scrolling = true,
  scrollOffset,
  scrollPosition,
  scrollSpeed = sSpeed,
  size = '3:4',
  sizes,
  src,
  transition,
  width,
  quality,
}) => {
  const classes = c(className, 'Figure', {
    '-mask': mask,
    '-bg': background && !blurhash,
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
  const imageSize = {
    height: height
      ? height
      : size === '3:4'
      ? 1920
      : size === '1:1'
      ? 1440
      : null,
    width: width ? width : size === '3:4' ? 1440 : size === '1:1' ? 1440 : null,
  };

  let figureVariants =
    transition === 'move'
      ? moveVariants
      : transition === 'clip'
      ? clipVariants
      : mask
      ? maskVariants
      : moveVariants;

  return (
    <div
      className={classes}
      data-scroll
      ref={ref}
      style={{
        ['--Figure-bg-color']:
          isString(background) && !blurhash ? background : undefined,
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
        <motion.div
          animate={inView ? 'inView' : ''}
          className="Figure-figure-main"
          initial="hidden"
          variants={figureVariants}
        >
          {!isVideo && blurhash && !priority && (
            <AnimatePresence>
              {!imageIsLoaded && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="Figure-blur"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ...transTertiaryFastest, duration: 0.2 }}
                >
                  <BlurhashCanvas
                    className="Figure-blur-canvas"
                    hash={blurhash.hash}
                    height={blurhash.width}
                    punch={1}
                    width={blurhash.height}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
          {!isVideo && (
            <NextImage
              alt={alt}
              className="Figure-img"
              draggable="false"
              onLoadingComplete={() => setImageIsLoaded(true)}
              sizes={sizes}
              src={src}
              quality={quality}
              priority={priority}
              {...imageSize}
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
        </motion.div>
      </figure>
    </div>
  );
};
