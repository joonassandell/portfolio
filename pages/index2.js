import Title from '../components/Title';
import OrasHero from '../containers/Template/Oras/Hero.js';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useContext, useRef } from 'react';
import { SmoothScrollProvider, SmoothScrollContext } from '../lib/SmoothScroll';

export default function Home() {
  const { scroll } = useContext(SmoothScrollContext);
  const [hideAnimation, setHideAnimation] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [currentHero, setCurrentHero] = useState(false);
  // const [animateToView, setAnimateToView] = useState(false);
  // const viewAnimation = useAnimation();

  // useEffect(() => {
  //   (async () => {
  //     if (animateToView) {
  //       viewAnimation.start({
  //         height: '100vh',
  //         transition: {
  //           duration: 0.8,
  //           type: 'tween',
  //           ease: [0.175, 0.85, 0.42, 0.96],
  //         },
  //       });
  //     }
  //   })();
  // });

  const handleClick = (e) => {
    e.preventDefault();
    // const id = e.currentTarget.closest('[data-id]').dataset['id'];
    const id = e.currentTarget.closest('[id]').id;
    console.log(id);
    setCurrentHero(id);
    // setAnimation(true);
    scroll && scroll.scrollTo('#oras');

    setHideAnimation(true);
  }

  // const handleFocus = (e) => {
  //   e.preventDefault();
  //   setCurrentHero(e.currentTarget.dataset['id']);
  // }

  return (
    <>
      <Title title="Portfolio" />
      {/* <SmoothScrollProvider options={{ smooth: true }}> */}
        <motion.div 
          exit={{
            opacity: 0,
          }}
        >
          <OrasHero 
            allowAnimationClick
            animation={currentHero === "oras" && animation}
            animationHidden={currentHero != "oras" && hideAnimation}
            id="oras"
            onClick={handleClick} 
            onFocus={handleClick} 
            initialVisualState='compact'
          />
        </motion.div>
        <div data-id="mummu" onClick={handleClick} style={{height: '200vh', background: 'red'}}></div>
      {/* </SmoothScrollProvider> */}
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
