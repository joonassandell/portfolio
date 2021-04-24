import {
  animate,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { transPrimary, transSecondary } from '../../lib/config';

import Image from 'next/image';
import c from 'classnames';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OrasHero({
  animationStart = false,
  animationHideStart = false,
  animationState = 'initial', // preAnimation, initial
  ...props
}) {
  const router = useRouter();
  const headline = useAnimation();
  const bg = useAnimation();
  const bgGradientValue = useMotionValue(0);
  const bgGradient = useTransform(
    bgGradientValue,
    [0, 100],
    [
      'linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 1) 100%)',
      'linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 0) 100%)',
    ],
  );
  const initial = animationState === 'initial';
  const preAnimation = animationState === 'preAnimation';

  useEffect(() => {
    if (animationStart) {
      (async () => {
        animate(bgGradientValue, 100, transSecondary);
        bg.start({
          height: '100vh',
          transition: transSecondary,
        });
        await headline.start({
          y: '-175%',
          transition: transPrimary,
        });
        router.push('/oras');
      })();
    }
  });

  return (
    <motion.section
      exit={
        animationHideStart && {
          opacity: 0,
        }
      }
      id={props.id}
      className={c('Oras-hero', {
        ['-preAnimation']: preAnimation,
        ['-initial']: initial,
      })}
    >
      <div className="Oras-hero-wrap wrap">
        <div className="grid">
          <div className="Oras-hero-figure grid-col grid-col6 -start7 grid-col5@m -start8@m grid-col4@l -start7@xl">
            <figure
              data-scroll
              data-scroll-speed="-1"
              data-scroll-position="top"
              className="Oras-hero-figure-img"
            >
              <Image
                alt="Oras faucet"
                height={2552}
                layout="responsive"
                onClick={props.onClick}
                src="/images/oras/oras-hero.png"
                width={2192}
              />
            </figure>
            <motion.div
              animate={bg}
              className="Oras-hero-figure-bg"
              style={
                preAnimation && {
                  background: bgGradient,
                }
              }
            />
            <motion.div
              animate={
                animationStart && {
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    damping: 30,
                    type: 'spring',
                  },
                  y: 0,
                }
              }
              className="Oras-hero-drop Oras-hero-drop--3"
              initial={
                preAnimation && {
                  opacity: 0,
                  y: -24,
                }
              }
            >
              <Image
                aria-hidden="true"
                height={256}
                layout="responsive"
                src="/images/oras/drop.png"
                width={256}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        animate={
          animationStart && {
            opacity: 1,
            transition: {
              delay: 0.2,
              damping: 30,
              type: 'spring',
            },
            y: 0,
          }
        }
        initial={
          preAnimation && {
            opacity: 0,
            y: -96,
          }
        }
        className="Oras-hero-drop Oras-hero-drop--1"
      >
        <Image
          aria-hidden="true"
          height={256}
          layout="responsive"
          src="/images/oras/drop.png"
          width={256}
        />
      </motion.div>
      <motion.div
        animate={
          animationStart && {
            opacity: 1,
            transition: {
              delay: 0.5,
              damping: 25,
              type: 'spring',
            },
            y: 0,
          }
        }
        className="Oras-hero-drop Oras-hero-drop--2"
        initial={
          preAnimation && {
            opacity: 0,
            y: -120,
          }
        }
      >
        <Image
          aria-hidden="true"
          height={256}
          layout="responsive"
          src="/images/oras/drop.png"
          width={256}
        />
      </motion.div>
      <a
        data-id={props.id}
        href="/oras"
        onClick={props.onClick}
        onFocus={props.onFocus}
      >
        <span className="hideVisually">Oras project</span>
      </a>
      <motion.h2
        animate={headline}
        className="Oras-hero-heading Heading Heading--display"
      >
        <div
          className="Heading-inner"
          data-scroll
          data-scroll-offset="-10%"
          data-scroll-speed="1"
          data-scroll-position="top"
        >
          Oras—2016
        </div>
      </motion.h2>
    </motion.section>
  );
}
