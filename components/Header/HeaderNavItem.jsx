import { m, animate } from 'framer-motion';
import { marqueeVariants, marqueeInnerVariants } from './Header.animations';
import { getClosestEdge } from '@/lib/utility';
import { navItemVariant } from './Header.animations';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import c from 'classnames';
import EyeSvg from './eye.svg';
import Link from 'next/link';

export const NavItem = props => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [closestEdge, setClosestEdge] = useState(null);
  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);
  const marqueeRef = useRef(null);

  const findClosestEdge = e => {
    const x = e.pageX - ref.current.offsetLeft;
    const y = e.pageY - ref.current.offsetTop;

    setClosestEdge(
      getClosestEdge(x, y, ref.current.clientWidth, ref.current.clientHeight),
    );
  };

  useEffect(() => {
    if (reveal) {
      if (!marqueeRef.current) return;
      const width = marqueeRef.current.clientWidth;
      const duration = width / 50 - width / 58;
      const controls = animate('-50%', '0%', {
        duration: duration > 0 ? duration : 25,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
        onUpdate(value) {
          if (!marqueeRef.current) {
            controls.stop();
            return;
          }
          marqueeRef.current.style.transform = `translateX(${value}) translateZ(0px)`;
        },
      });
    }
  }, [reveal]);

  return (
    <m.li
      className={c('Header-nav-item', {
        'is-active': router.pathname === props.url,
      })}
      onMouseEnter={e => {
        findClosestEdge(e);
        setHover('in');
      }}
      ref={ref}
      onMouseLeave={e => {
        findClosestEdge(e);
        setHover('out');
      }}
      style={{
        '--Header-marquee-iris': props.color,
      }}
      variants={navItemVariant}
    >
      <Link
        className="Header-nav-link"
        href={props.url}
        onClick={props.onClick}
        scroll={false}
      >
        <span className="Header-nav-link-inner">
          <span className="Header-nav-link-text">{props.name}</span>
          <EyeSvg className="Header-nav-link-eye" />
        </span>
      </Link>
      <m.div
        animate={hover === 'in' ? 'in' : hover === 'out' ? 'out' : ''}
        aria-hidden="true"
        className="Header-nav-marquee"
        custom={closestEdge === 'top' ? 'top' : 'bottom'}
        initial="out"
        onAnimationStart={() => {
          if (hover === 'in') setReveal(true);
        }}
        onAnimationComplete={() => {
          if (hover === 'out') setReveal(false);
        }}
        variants={marqueeVariants}
        transition={marqueeVariants.transition}
      >
        <m.div
          className="Header-nav-marquee-inner"
          custom={closestEdge == 'top' ? 'top' : 'bottom'}
          variants={marqueeInnerVariants}
          transition={marqueeVariants.transition}
        >
          {reveal && (
            <m.div ref={marqueeRef} className="Header-nav-marquee-inner-self">
              {[...Array(10)].map((x, i) => {
                return (
                  <Fragment key={i}>
                    <span>{props.name}</span>
                    <EyeSvg className="Header-nav-marquee-eye" />
                    <span>{props.year}</span>
                    <EyeSvg className="Header-nav-marquee-eye" />
                  </Fragment>
                );
              })}
            </m.div>
          )}
        </m.div>
      </m.div>
    </m.li>
  );
};
