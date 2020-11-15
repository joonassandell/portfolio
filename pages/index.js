import Head from 'next/head';
import s from '../components/Template/Home/index.module.scss';
import { defaultTransition as transition } from '../lib/config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const dropVariants = {

}

export default function Home() {
  const router = useRouter();
  const [animOras, setAnimOras] = useState(0);
  const headline = useAnimation();
  const bg = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      if (animOras) {
        bg.start({
          height: '100vh',
          transition: {
            // bounce: 0, 
            duration: 0.8,
            // type: 'spring', 
            type: 'tween', 
            ease: [0.175, 0.85, 0.42, 0.96],
          },
        });
        await headline.start({
          y: '-200%',
          transition: {
            // bounce: 0, 
            duration: 0.8,
            // type: 'spring', 
            type: 'tween', 
            ease: [0.175, 0.85, 0.42, 0.96],
          },
        });
        // router.push('/projects/oras');
      }
    };
    sequence();
  }, [bg, headline, animOras]);

  return (
    <>
      <Head>
        <title>Joonas Sandell — Portfolio</title>
      </Head>
      <motion.div exit={{
        opacity: 0,
      }}
      initial={{ 
        opacity: 0,
      }}
      animate={{ 
        opacity: 1,
      }}
      >
        <div className={s.Home}>
          <section className={`${s['Home-oras']} ${s['-compact']}`}>
            <div className={`${s['Home-oras-wrap']} Wrap`}>
              <div className="Grid">
                <div className={`${s['Home-oras-figure']} Grid-cell -push--6/12 -width--4/12`}>
                  <img onClick={() => setAnimOras(!animOras)} className={s['Home-oras-figure-img']} src="/images/oras/faucet.png" alt="Oras faucet" />
                  <motion.img 
                    animate={animOras && {
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
                    // onAnimationComplete={function() {
                      // router.push('/projects/oras');
                    // }}
                  />
                </div>
              </div>
            </div>
            <motion.img 
              animate={animOras && {
                opacity: 1,
                transition: {
                  delay: 0.3,
                  damping: 80,
                  type: 'spring'
                },
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: -210,
              }}
              className={`${s['Home-oras-drop']} ${s['-drop--1']}`} 
              src="/images/oras/drop.png" 
            />
            <motion.img 
              animate={animOras && {
                opacity: 1,
                transition: {
                  delay: 0.7,
                  damping: 100,
                  type: 'spring'
                },
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: -264,
              }}
              className={`${s['Home-oras-drop']} ${s['-drop--2']}`} 
              src="/images/oras/drop.png" 
            />
            <motion.h2 animate={headline} className={`${s['Home-oras-headline']} Headline`}>
              Oras—2016
            </motion.h2>
            <Link href="/projects/oras">
              <a className="hideVisually">Go to Oras project</a>
            </Link> 
          </section>
        </div>
      </motion.div>
      <div style={{height: '200vh'}}></div>
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
