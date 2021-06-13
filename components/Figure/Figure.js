import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
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
} from '../../lib/config';
import { default as NextImage } from 'next/image';
import { motion } from 'framer-motion';
import { isInView } from '../../lib/utility';
import c from 'classnames';

const moveInVariants = {
  inView: {
    opacity: 1,
    transition: transTertiary,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: '5rem',
  },
};

const fadeVariants = {
  inView: {
    opacity: 1,
    transition: transTertiaryFast,
  },
  hidden: {
    opacity: 0,
  },
};

const Figure = ({
  alt,
  className,
  height,
  id = 'image',
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
  sizes,
  transition,
  src,
  width,
}) => {
  const classes = c(className, 'Figure', {
    '-mask': mask,
    '-placeholderColor:50': placeholderColor === 50 || mask,
    '-placeholderColor:10': placeholderColor === 10,
  });
  const { scroll } = useLocomotiveScroll();
  const [inView, setInView] = useState(false);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const isVideo = src.indexOf('mp4') > -1;
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
  const offset =
    scrollOffset || scrollOffset === 0
      ? scrollOffset
      : !mask && transition != 'fade'
      ? '15%'
      : null;

  /**
   * Let the mask scroll effect go even less image hasn't loaded and element is in view
   */
  const figureInView = mask
    ? imageIsLoaded
    : isVideo
    ? inView
    : imageIsLoaded && inView;
  const figureVariants =
    mask || transition === 'fade' ? fadeVariants : moveInVariants;

  if (scroll) {
    scroll.on('scroll', args => isInView(args, id, () => setInView(true)));
  }

  useEffect(() => {
    () => scroll.off('call', inViewStart);
  }, [scroll]);

  return (
    <motion.div
      className={classes}
      data-scroll
      data-scroll-id={id}
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
          animate={figureInView ? 'inView' : false}
          className="Figure-figure-inner"
          initial="hidden"
          variants={figureVariants}
        >
          {!isVideo && (
            <NextImage
              alt={alt}
              className="Figure-img"
              layout="responsive"
              sizes={sizes}
              src={src}
              onLoad={event => {
                const target = event.target;
                if (target.src.indexOf('data:image/gif;base64') < 0) {
                  setImageIsLoaded(true);
                }
              }}
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
