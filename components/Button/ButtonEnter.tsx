import { m } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/App';
import c from 'clsx';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import {
  bgVariants,
  bgHoverVariants,
  buttonVariants,
  pathInVariants,
  pointerInVariants,
  pathOutVariants,
  pointerOutVariants,
  type ButtonEnterProps,
} from './';

export const ButtonEnter = ({
  className,
  children,
  href,
  onClick,
  templateTransition = false,
  ...props
}: ButtonEnterProps) => {
  const classes = c('Button Button--enter', className);
  const { setTransition } = useAppContext();
  const [hover, setHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const Tag = href ? m.a : m.button;

  return (
    <ConditionalWrapper
      condition={Boolean(href)}
      wrapper={children => (
        <Link href={href as string} legacyBehavior passHref scroll={false}>
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
        onClick={(e: any) => {
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
        whileTap="tap"
        variants={buttonVariants}
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
