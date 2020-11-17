import Head from 'next/head';
import OrasHero from '../components/Template/Oras/Hero.js';
import s from '../components/Template/Home/index.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [hideAnimation, setHideAnimation] = useState(false);
  const [currentHero, setCurrentHero] = useState(false);
  
  const [animateToView, setAnimateToView] = useState(false);
  const viewAnimation = useAnimation();
  useEffect(() => {
    (async () => {
      if (animateToView) {
        viewAnimation.start({
          height: '100vh',
          transition: {
            duration: 0.8,
            type: 'tween', 
            ease: [0.175, 0.85, 0.42, 0.96],
          },
        });
      }
    })();
  });

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentHero(e.currentTarget.dataset['id']);
    setHideAnimation(true);
  }

  const handleFocus = (e) => {
    e.preventDefault();
    setCurrentHero(e.currentTarget.dataset['id']);
  }

  return (
    <>
      <Head>
        <title>Joonas Sandell — Portfolio</title>
      </Head>
      <motion.div 
        exit={{
          opacity: 0,
        }}
      >
        <OrasHero 
          allowAnimationClick
          animationHidden={currentHero != "oras" && hideAnimation}
          id="oras"
          link="/projects/oras"
          onClick={handleClick} 
          onFocus={handleFocus} 
          initialVisualState='compact'
        />
        {animateToView && <OrasHero /> }
      </motion.div>
      <div data-id="mummu" onClick={handleClick} style={{height: '200vh', background: 'red'}}

      
      ></div>
    </>
  )
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      navTitle: 'Selected works'
    }, 
  }
}
