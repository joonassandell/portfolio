import { m, animate } from 'framer-motion';
import { marqueeVariants, marqueeInnerVariants } from './Header.animations';
import { getClosestEdge } from '@/lib/utility';
import { navItemVariant } from './Header.animations';
import { Fragment, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import c from 'classnames';
import EyeSvg from './eye.svg';
import Link from 'next/link';

export const NavItem = ({ url, color, onClick, name, year }) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [closestEdge, setClosestEdge] = useState('top');
  const [reveal, setReveal] = useState(false);
  const [revealTimeout, setRevealTimeout] = useState(null);
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
    if (reveal && marqueeRef.current) {
      const { current } = marqueeRef;
      const width = current.clientWidth;
      const duration = width / 50 - width / 58;
      const controls = animate('-50%', '0%', {
        duration: duration > 0 ? duration : 25,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
        onUpdate(value) {
          if (!current) {
            controls.stop();
            return;
          }
          current.style.transform = `translateX(${value}) translateZ(0px)`;
        },
      });
    }
  }, [reveal]);

  return (
    <m.li
      className={c('Header-nav-item', {
        'is-active': router.pathname === url,
      })}
      ref={ref}
      style={{ '--Header-marquee-iris': color }}
      variants={navItemVariant}
    >
      <Link
        className="Header-nav-link"
        href={url}
        onBlur={() => setHover('out')}
        onFocus={() => setHover('in')}
        onMouseEnter={e => {
          findClosestEdge(e);
          setHover('in');
        }}
        onMouseLeave={e => {
          findClosestEdge(e);
          setHover('out');
        }}
        onClick={e => {
          onClick(e);
          setHover('out');
        }}
      >
        <span className="Header-nav-link-inner">
          <span className="Header-nav-link-text">{name}</span>
          <EyeSvg className="Header-nav-link-eye" />
        </span>
      </Link>
      <m.div
        animate={hover}
        aria-hidden="true"
        className="Header-nav-marquee"
        custom={closestEdge}
        initial="out"
        onAnimationStart={() => {
          if (hover === 'in') {
            revealTimeout && clearTimeout(revealTimeout);
            setReveal(true);
          }
        }}
        onAnimationComplete={() => {
          if (hover === 'out') {
            setRevealTimeout(setTimeout(() => setReveal(false), 100));
          }
        }}
        variants={marqueeVariants}
        transition={marqueeVariants.transition}
      >
        <m.div
          className="Header-nav-marquee-inner"
          custom={closestEdge}
          variants={marqueeInnerVariants}
          transition={marqueeVariants.transition}
        >
          {reveal && (
            <m.div ref={marqueeRef} className="Header-nav-marquee-inner-self">
              {[...Array(10)].map((x, i) => {
                return (
                  <Fragment key={i}>
                    <span>{name}</span>
                    <EyeSvg className="Header-nav-marquee-eye" />
                    <span>{year}</span>
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
