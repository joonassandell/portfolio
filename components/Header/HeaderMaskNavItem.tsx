import { animate, m } from 'framer-motion';
import { Fragment, type MouseEvent, useEffect, useRef, useState } from 'react';
import { getClosestEdge } from '@/lib/utils';
import {
  type HeaderMaskNavItemProps,
  maskNavItemMarqueeInnerVariant,
  maskNavItemMarqueeTransition,
  maskNavItemMarqueeVariant,
  maskNavItemVariant,
} from './';
import { useAppContext } from '@/components/App';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';
import EyeSvg from './eye.svg';
import Link from 'next/link';

export const HeaderMaskNavItem = ({
  color,
  href,
  onClick,
  title,
  year,
}: HeaderMaskNavItemProps) => {
  const { active } = useUrlState(href);
  const classes = c('Header-mask-nav-item', {
    'is-active': active,
  });
  const [hover, setHover] = useState<'in' | 'out' | false>(false);
  const [closestEdge, setClosestEdge] = useState('top');
  const [reveal, setReveal] = useState(false);
  const [revealTimeout, setRevealTimeout] =
    useState<ReturnType<typeof setTimeout>>();
  const ref = useRef<HTMLLIElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const {
    detect: { hasTouch },
  } = useAppContext();

  const findClosestEdge = (e: MouseEvent) => {
    if (!ref.current) return;
    const x = e.pageX - ref.current?.offsetLeft;
    const y = e.pageY - ref.current?.offsetTop;

    setClosestEdge(
      getClosestEdge(x, y, ref.current.clientWidth, ref.current.clientHeight),
    );
  };

  useEffect(() => {
    if (!reveal || !marqueeRef.current) return;
    const { current } = marqueeRef;
    const width = current.clientWidth;
    const duration = width / 50 - width / 58;
    const controls = animate('-50%', '0%', {
      duration: duration > 0 ? duration : 25,
      ease: 'linear',
      onUpdate(value) {
        if (!current) {
          controls.stop();
          return;
        }
        current.style.transform = `translateX(${value}) translateZ(0px)`;
      },
      repeat: Infinity,
      repeatType: 'loop',
    });
  }, [reveal]);

  return (
    <m.li
      className={classes}
      ref={ref}
      style={{ ['--Header-mask-nav-marquee-iris' as string]: color }}
      variants={maskNavItemVariant}
    >
      <Link
        className="Header-mask-nav-link"
        href={href}
        onBlur={() => setHover('out')}
        onClick={e => {
          onClick && onClick(e);
          if (!hasTouch) setHover('out');
        }}
        onFocus={() => setHover('in')}
        onMouseEnter={e => {
          findClosestEdge(e);
          setHover('in');
        }}
        onMouseLeave={e => {
          findClosestEdge(e);
          setHover('out');
        }}
      >
        <span className="Header-mask-nav-link-inner">
          <span className="Header-mask-nav-link-text">{title}</span>
          <EyeSvg className="Header-mask-nav-link-eye" />
        </span>
      </Link>
      <m.div
        animate={hover}
        aria-hidden="true"
        className="Header-mask-nav-marquee"
        custom={closestEdge}
        initial="out"
        onAnimationComplete={() => {
          if (hover === 'out') {
            setRevealTimeout(setTimeout(() => setReveal(false), 100));
          }
        }}
        onAnimationStart={() => {
          if (hover === 'in') {
            revealTimeout && clearTimeout(revealTimeout);
            setReveal(true);
          }
        }}
        transition={maskNavItemMarqueeTransition}
        variants={maskNavItemMarqueeVariant}
      >
        <m.div
          className="Header-mask-nav-marquee-inner"
          custom={closestEdge}
          transition={maskNavItemMarqueeTransition}
          variants={maskNavItemMarqueeInnerVariant}
        >
          {reveal && (
            <m.div
              className="Header-mask-nav-marquee-inner-self"
              ref={marqueeRef}
            >
              {[...Array(10)].map((x, i) => {
                return (
                  <Fragment key={i}>
                    <span>{title}</span>
                    <EyeSvg className="Header-mask-nav-marquee-eye" />
                    <span>{year}</span>
                    <EyeSvg className="Header-mask-nav-marquee-eye" />
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
