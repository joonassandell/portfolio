import {
  bgHoverVariants,
  bgVariants,
  type ButtonEnterProps,
  buttonVariants,
  pathInVariants,
  pathOutVariants,
  pointerInVariants,
  pointerOutVariants,
} from './';
import { type ButtonEvent, type LinkEvent } from '@/types';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { m } from 'framer-motion';
import { useApp } from '@/components/App';
import { useState } from 'react';
import c from 'clsx';
import Link from 'next/link';

export const ButtonEnter = ({
  children,
  className,
  href,
  onClick,
  templateTransition = false,
  ...props
}: ButtonEnterProps) => {
  const classes = c('Button Button--enter', className);
  const { setTransition } = useApp();
  const [hover, setHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const Tag = href ? m.a : m.button;

  return (
    <ConditionalWrapper
      condition={Boolean(href)}
      wrapper={children => (
        <Link href={href as URL['href']} legacyBehavior passHref scroll={false}>
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
        onClick={(e: ButtonEvent & LinkEvent) => {
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
        variants={buttonVariants}
        whileTap="tap"
        {...props}
      >
        <m.div
          animate={arrowHover ? 'in' : 'initial'}
          className="Button-arrow"
          initial="initial"
          onAnimationComplete={() => setArrowHover(false)}
        >
          <svg
            className="Button-arrow-svgPath"
            xmlns="http://www.w3.org/2000/svg"
          >
            <m.path
              className="Button-arrow-path"
              d="M1 0V28C1 30.7614 3.23858 33 6 33H37"
              variants={pathInVariants}
            />
          </svg>
          <svg
            className="Button-arrow-svgPath Button-arrow-svgPath--out"
            xmlns="http://www.w3.org/2000/svg"
          >
            <m.path
              className="Button-arrow-path"
              d="M1 0V28C1 30.7614 3.23858 33 6 33H37"
              variants={pathOutVariants}
            />
          </svg>
          <m.div
            className="Button-arrow-pointer"
            variants={pointerInVariants}
          />
          <m.div
            className="Button-arrow-pointer Button-arrow-pointer--out"
            variants={pointerOutVariants}
          />
        </m.div>
        <div className="hideVisually">{children}</div>
        <m.span
          animate={hover ? 'in' : 'out'}
          className="Button-bg"
          variants={bgVariants}
        />
        <m.span
          animate={hover ? 'in' : 'out'}
          className="Button-bg-hover"
          variants={bgHoverVariants}
        />
      </Tag>
    </ConditionalWrapper>
  );
};
