import { useState, useRef } from 'react';
import {
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
import { useInView, useInViewVideo } from '@/lib/useInView';
import useIsMobile from '@/lib/useIsMobile';
import { BlurhashCanvas } from 'react-blurhash';
import c from 'classnames';
import { clipVariants, moveVariants, maskVariants } from './Figure.animations';

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
  priority,
  sizes,
  transition,
  src,
  width,
  quality,
}) => {
  const classes = c(className, 'Figure', {
    '-mask': mask,
    // '-placeholderColor:50': placeholderColor === 50 || mask,
    // '-placeholderColor:10': placeholderColor === 10,
  });
  const id = src.split('/').pop().split('.')[0];
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const offset =
    scrollOffset || scrollOffset === 0
      ? scrollOffset
      : mask && isMobile
      ? 0
      : mask
      ? '-25%'
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

  let figureVariants = mask
    ? maskVariants
    : transition === 'clip'
    ? clipVariants
    : moveVariants;

  return (
    <motion.div
      className={classes}
      data-scroll
      ref={ref}
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
          className="Figure-figure-inner"
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
              onLoadingComplete={() => {
                setImageIsLoaded(true);
              }}
              {...(priority && { priority: true })}
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
    </motion.div>
  );
};

export default Figure;
