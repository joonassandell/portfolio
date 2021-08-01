import { motion, animate } from 'framer-motion';
import { transPrimaryFast } from '@/lib/config';
import { getClosestEdge } from '@/lib/utility';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import c from 'classnames';
import EyeSvg from './eye.svg';

const marqueeVariants = {
  in: pos => {
    if (pos === 'top') {
      return {
        // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        y: ['-100%', '0%'],
      };
    }

    if (pos === 'bottom') {
      return {
        // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        y: ['100%', '0%'],
      };
    }
  },
  out: pos => {
    if (pos === 'top') {
      return {
        y: '-100%',
        // clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      };
    }

    if (pos === 'bottom') {
      return {
        // clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        y: '100%',
      };
    }
  },
  transition: transPrimaryFast,
};

const marqueeInnerVariants = {
  in: pos => {
    if (pos === 'top') {
      return {
        y: ['100%', '0%'],
      };
    }

    if (pos === 'bottom') {
      return {
        y: ['-100%', '0%'],
      };
    }
  },
  out: pos => {
    if (pos === 'top') {
      return {
        y: '100%',
      };
    }

    if (pos === 'bottom') {
      return {
        y: '-100%',
      };
    }
  },
};

const NavItem = props => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [closestEdge, setClosestEdge] = useState(null);
  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);
  // const marquee = useAnimation();
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

  // useEffect(() => {
  //   const duration = width / 50 - width / 58;
  //   if (hover === 'in') {
  //   marquee.start({
  //     // x: [null, '-50%', '0%'],
  //     // x: [null, '-50%'],
  //     x: ['0%', '-50%'],
  //     transition: {
  //       repeat: Infinity,
  //       repeatType: 'loop',
  //       duration: duration > 0 ? duration : 25,
  //       ease: 'linear',
  //     },
  //   });
  //   }
  // }, [hover]);

  return (
    <motion.li
      className={c('Header-nav-item', {
        'is-active': router.pathname === props.href,
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
      // variants={navItemVariant}
    >
      <a className="Header-nav-link" href={props.url} onClick={props.onClick}>
        {props.name}
      </a>
      <motion.div
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
        <motion.div
          className="Header-nav-marquee-inner"
          custom={closestEdge == 'top' ? 'top' : 'bottom'}
          variants={marqueeInnerVariants}
          transition={marqueeVariants.transition}
        >
          {reveal && (
            <motion.div
              // animate={marquee}
              ref={marqueeRef}
              // initial={{
              //   x: '0%',
              // }}
              className="Header-nav-marquee-inner-self"
            >
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
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.li>
  );
};

export default NavItem;

// useEffect(() => {
//   (async () => {
//     if (hover) {
//       if (closestEdge === 'top') {
//         marquee.start({
//           y: ['-100%', '0%'],
//         });
//         marqueeInner.start({
//           y: ['100%', '0%'],
//         });
//       }
//       if (closestEdge === 'bottom') {
//         marquee.start({
//           y: ['100%', '0%'],
//         });
//         marqueeInner.start({
//           y: ['-100%', '0%'],
//         });
//       }
//     } else {
//       if (closestEdge === 'top') {
//         marquee.start({
//           y: '-100%',
//         });
//         marqueeInner.start({
//           y: '100%',
//         });
//       }
//       if (closestEdge === 'bottom') {
//         marquee.start({
//           y: '100%',
//         });
//         marqueeInner.start({
//           y: '-100%',
//         });
//       }
//     }
//   })();
// }, [hover, closestEdge]);
