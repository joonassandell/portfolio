import { useState } from 'react';
import {
  mq,
  scrollSpeed as scrlSpeed,
  transPrimary,
  transTertiary,
  transTertiaryFast,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '@/lib/config';
import { default as NextImage } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import useInView from '@/lib/useInView';
import useIsMobile from '@/lib/useIsMobile';
import { BlurhashCanvas } from 'react-blurhash';
import c from 'classnames';
import { useCallbackRef } from 'use-callback-ref';
import { moveInVariants, fadeVariants } from './Figure.animations';

const Figure = ({
  alt,
  blurhash,
  className,
  height,
  mask = false,
  size = '3:4',
  placeholderColor,
  scrolling = true,
  scrollDelay,
  scrollPosition,
  scrollSpeed = scrlSpeed,
  scrollImageSpeed = -3,
  scrollOffset,
  scrollImageOffset = '-20%',
  priority,
  sizes,
  transition,
  src,
  width,
  quality,
}) => {
  const classes = c(className, 'Figure', {
    '-mask': mask,
    '-placeholderColor:50': placeholderColor === 50 || mask,
    '-placeholderColor:10': placeholderColor === 10,
  });
  const ref = useCallbackRef(null, ref => ref);
  const inView = useInView(ref, src);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const isVideo = src && src.indexOf('mp4') > -1;
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
  const mobile = useIsMobile();

  /**
   * 1. Mask offset
   * 2. Default offset
   * 3. Fade offset
   */
  const offset =
    scrollOffset || scrollOffset === 0
      ? scrollOffset
      : mask
      ? '-25%' // [1.]
      : !mask && transition != 'fade' // [2.]
      ? '-25%'
      : '15%'; // [3.]

  let figureVariants =
    mask || transition === 'fade' ? fadeVariants : moveInVariants;

  if (mobile) {
    figureVariants = mask ? moveInVariants : figureVariants;
  }

  return (
    <motion.div
      className={classes}
      data-scroll
      data-scroll-id={src}
      {...(scrolling && scrollSpeed && { 'data-scroll-speed': scrollSpeed })}
      {...(offset && { 'data-scroll-offset': offset })}
      {...(scrollPosition && { 'data-scroll-position': scrollPosition })}
      {...(scrolling && scrollDelay && { 'data-scroll-delay': scrollDelay })}
    >
      <figure
        className="Figure-figure"
        {...(scrolling && mask && { 'data-scroll': true })}
        {...(scrolling && mask && { 'data-scroll-offset': scrollImageOffset })}
        {...(scrolling && mask && { 'data-scroll-speed': scrollImageSpeed })}
        {...(scrolling &&
          scrollPosition && { 'data-scroll-position': scrollPosition })}
        {...(scrolling && scrollDelay && { 'data-scroll-delay': scrollDelay })}
      >
        <motion.div
          animate={inView ? 'inView' : false}
          className="Figure-figure-inner"
          initial="hidden"
          ref={ref}
          variants={figureVariants}
        >
          {!isVideo && blurhash && (
            <AnimatePresence>
              {!imageIsLoaded && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="Figure-blur"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={transTertiary}
                >
                  <BlurhashCanvas
                    className="Figure-blur-canvas"
                    hash={blurhash.hash}
                    width={blurhash.height}
                    height={blurhash.width}
                    punch={1}
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
              layout="responsive"
              sizes={sizes}
              src={src}
              quality={quality}
              onLoad={event => {
                const target = event.target;
                if (target.src.indexOf('data:image/gif;base64') < 0) {
                  setImageIsLoaded(true);
                }
              }}
              {...(priority && { priority: true })}
              {...imageSize}
            />
          )}
          {isVideo && (
            <video
              autoPlay
              className="Figure-video"
              loop
              muted
              playsInline
              title={alt}
            >
              <source src={src} />
            </video>
          )}
        </motion.div>
      </figure>
    </motion.div>
  );
};

export default Figure;
