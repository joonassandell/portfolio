import s from './Hero.module.scss';
import c from 'classnames';
import { defaultTransition as transition } from '../../../lib/config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function OrasHero({
  allowAnimationClick = false,
  initialVisualState = '', // compact, initial
  ...props
}) {
  const router = useRouter();
  const [animation, setAnimation] = useState(false);
  const headline = useAnimation();
  const bg = useAnimation();

  useEffect(() => {
    // Animation sequence
    (async () => {
      if (animation && !props.animationHidden) {
        bg.start({
          height: '100vh',
          transition: {
            duration: 0.8,
            type: 'tween', 
            ease: [0.175, 0.85, 0.42, 0.96],
          },
        });
        await headline.start({
          y: '-200%',
          transition: {
            duration: 0.8,
            type: 'tween', 
            ease: [0.175, 0.85, 0.42, 0.96],
          },
        });
        // router.push(props.link);
      }
    })();
  }, [bg, headline, animation]);

  const handleAnim = () => allowAnimationClick && setAnimation(!animation);

  return (
    <motion.section 
      animate={props.animationHidden && {
        opacity: 0,
      }}  
      data-id={props.id} 
      onClick={props.onClick} 
      className={c(s['Home-oras'], {
        [`${s['-compact']}`]: initialVisualState === 'compact',
      })}
    >
      <div className={`${s['Home-oras-wrap']} Wrap`}>
        <div className="Grid">
          <div className={`${s['Home-oras-figure']} Grid-cell -push--6/12 -width--4/12`}>
            <img onClick={() => handleAnim(!animation)} className={s['Home-oras-figure-img']} src="/images/oras/faucet.png" alt="Oras faucet" />
            <motion.img 
              animate={animation && {
                opacity: 1,
                transition: {...transition, delay: 0.5},
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: -24,
              }}
              className={`${s['Home-oras-drop']} ${s['-drop--3']}`} 
              src="/images/oras/drop.png" 
            />
          </div>
        </div>
      </div>
      <div className={`${s['Home-oras-wrap']} ${s['Home-oras-wrap--bg']} Wrap`}>
        <div className="Grid">
          <div className={`${s['Home-oras-figure']} Grid-cell -push--6/12 -width--4/12`}>
            <motion.div 
              className={s['Home-oras-figure-bg']}
              animate={bg}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <motion.img 
        animate={animation && {
          opacity: 1,
          transition: {
            delay: 0.6,
            damping: 80,
            type: 'spring'
          },
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: -96,
        }}
        className={`${s['Home-oras-drop']} ${s['-drop--1']}`} 
        src="/images/oras/drop.png" 
        aria-hidden="true"
      />
      <motion.img 
        animate={animation && {
          opacity: 1,
          transition: {
            delay: 1,
            damping: 100,
            type: 'spring'
          },
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: -120,
        }}
        className={`${s['Home-oras-drop']} ${s['-drop--2']}`} 
        src="/images/oras/drop.png" 
        aria-hidden="true"
      />
      <a href="/projects/oras" data-id={props.id} onFocus={props.onFocus} onClick={() => handleAnim(!animation)}>
        <span className="hideVisuall">Oras project</span>
      </a>
      <motion.h2 animate={headline} className={`${s['Home-oras-headline']} Headline`}>
        Oras—2016
      </motion.h2>
    </motion.section>
  )
}