import c from 'classnames';
import { transPrimary, transSecondary } from '../../../lib/config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence, useAnimation, useTransform, useMotionValue, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function OrasHero({
  allowAnimationClick = false,
  animation = false,
  initialVisualState = '', // compact, initial
  ...props
}) {
  const router = useRouter();
  // const [animation, setAnimation] = useState(false);
  // const { animation } = props;
  const headline = useAnimation();
  const bg = useAnimation();
  const bgGradientValue = useMotionValue(0);
  const bgGradientInput = [0, 100];
  const bgGradient = useTransform(bgGradientValue, bgGradientInput, [
    "linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 1) 100%)",
    "linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 0) 100%)",
  ]);

  useEffect(() => {
    // Animation sequence
    (async () => {
      if (animation && !props.animationHidden) {
        animate(bgGradientValue, 100, transSecondary);
        bg.start({
          // scaleY: 3,
          height: '100vh',
          transition: transSecondary,
        });
        await headline.start({
          y: '-200%',
          transition: transPrimary,
        });
        // router.push('/projects/oras');
      }
    })();
  });

  // const handleAnim = () => allowAnimationClick && setAnimation(!animation);

  return (
    <motion.section 
      animate={props.animationHidden && {
        opacity: 0,
      }}  
      
      id={props.id} 
      // data-id={props.id} 
      // ref={props.ref} 
      // onClick={props.onClick} 
      className={c('Oras-hero', {
        ['-compact']: initialVisualState === 'compact',
      })}
    >
      <div className={'Oras-hero-wrap wrap'}>
        <div className="grid">
          <div className={'Oras-hero-figure grid-col grid-col4 -start7'}>
            <img 
              data-scroll 
              data-scroll-speed="-1" 
              data-scroll-delay="0.5"
              // onClick={() => handleAnim(!animation)}
              onClick={props.onClick}
              className={'Oras-hero-figure-img'} 
              src="/images/oras/faucet.png" 
              alt="Oras faucet" 
            />
            {/* <motion.img 
              animate={animation && {
                opacity: 1,
                transition: {...transition, delay: 0.5},
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: -24,
              }}
              className={'Oras-hero-drop -drop--3'} 
              src="/images/oras/drop.png" 
            /> */}
          </div>
        </div>
      </div>
      <div className={'Oras-hero-wrap Oras-hero-wrap--bg wrap'}>
        <div className="grid">
          <div className={'Oras-hero-figure grid-col grid-col4 -start7'}>
            <motion.div 
              className={'Oras-hero-figure-bg'}
              animate={bg}
              aria-hidden="true"
              style={{ background: bgGradient }}
            />
          </div>
        </div>
      </div>
      <motion.img 
        animate={animation && {
          opacity: 1,
          transition: {
            delay: 0.2,
            damping: 40,
            type: 'spring'
          },
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: -96,
        }}
        className={'Oras-hero-drop -drop--1'} 
        src="/images/oras/drop.png" 
        aria-hidden="true"
      />
      <motion.img 
        animate={animation && {
          opacity: 1,
          transition: {
            delay: 0.5,
            damping: 35,
            type: 'spring'
          },
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: -120,
        }}
        className={'Oras-hero-drop -drop--2'} 
        src="/images/oras/drop.png" 
        aria-hidden="true"
      />
      <a href="/projects/oras" data-id={props.id} onFocus={props.onFocus} onClick={() => handleAnim(!animation)}>
        <span className="hideVisually">Oras project</span>
      </a>
      <motion.h2 animate={headline} className={'Oras-hero-headline Headline'}>
        <div 
          data-scroll 
          data-scroll-speed="1"
          data-scroll-position="top"
          // data-scroll-delay="0.1"
        >
          Oras—2016
        </div>
      </motion.h2>
    </motion.section>
  )
}