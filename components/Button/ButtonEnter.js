import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/containers/App';
import c from 'classnames';
import ConditionalWrapper from '../ConditionalWrapper';
import {
  bgVariants,
  bgHoverVariants,
  buttonVariants,
  pathInVariants,
  pointerInVariants,
  pathOutVariants,
  pointerOutVariants,
} from './ButtonEnter.animations';

const ButtonEnter = ({
  className,
  children,
  href,
  onClick,
  templateTransition = false,
}) => {
  const classes = c(className, 'Button Button--enter');
  const { setTransition } = useAppContext();
  const [hover, setHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const Tag = href ? motion.a : motion.button;

  return (
    <ConditionalWrapper
      condition={href}
      wrapper={children => (
        <Link href={href} passHref scroll={false}>
          {children}
        </Link>
      )}
    >
      <Tag
        className={classes}
        onBlur={() => {
          if (hover) {
            setHover(false);
          }
        }}
        onClick={e => {
          templateTransition && setTransition('template');
          onClick && onClick(e);
        }}
        onFocus={() => {
          if (!hover) {
            setArrowHover(true);
            setHover(true);
          }
        }}
        onMouseEnter={() => {
          setArrowHover(true);
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        // whileHover="in" // WHY THIS DOESN'T WORK?!
        whileTap="tap"
        variants={buttonVariants}
      >
        <motion.div
          animate={arrowHover ? 'in' : 'initial'}
          className="Button-arrow"
          initial="initial"
          onAnimationComplete={() => setArrowHover(false)}
        >
          <svg
            className="Button-arrow-svgPath"
            // viewBox="0 0 37 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              className="Button-arrow-path"
              d="M1 0V28C1 30.7614 3.23858 33 6 33H37"
              variants={pathInVariants}
            />
          </svg>
          <svg
            className="Button-arrow-svgPath Button-arrow-svgPath--out"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              className="Button-arrow-path"
              d="M1 0V28C1 30.7614 3.23858 33 6 33H37"
              variants={pathOutVariants}
            />
          </svg>
          <motion.div
            className="Button-arrow-pointer"
            variants={pointerInVariants}
          />
          <motion.div
            className="Button-arrow-pointer Button-arrow-pointer--out"
            variants={pointerOutVariants}
          />
        </motion.div>
        <div className="hideVisually">{children}</div>
        <motion.span
          animate={hover ? 'in' : 'out'}
          className="Button-bg"
          variants={bgVariants}
        />
        <motion.span
          animate={hover ? 'in' : 'out'}
          className="Button-bg-hover"
          variants={bgHoverVariants}
        />
      </Tag>
    </ConditionalWrapper>
  );
};

export default ButtonEnter;
