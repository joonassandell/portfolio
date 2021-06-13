import {
  animate,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { scrollSpeed, transPrimary, transSecondary } from '../../lib/config';
import { getSitemap } from '../../lib/utility';
import { ButtonEnter } from '../../components/Button';

import Image from 'next/image';
import c from 'classnames';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const oras = getSitemap('oras');

export default function OrasHero({
  animationStart = false,
  animationHideStart = false,
  animationState = 'initial', // preAnimation, initial
  id,
  onClick,
}) {
  const router = useRouter();
  const headingDisplay = useAnimation();
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
  const HeadingDisplay = preAnimation ? motion.h2 : motion.h1;

  useEffect(() => {
    if (animationStart) {
      (async () => {
        animate(bgGradientValue, 100, transSecondary);
        bg.start({
          height: '100vh',
          transition: transSecondary,
        });
        await headingDisplay.start({
          y: '-175%',
          transition: transPrimary,
        });
        router.push(oras.url);
      })();
    }
  });

  return (
    <motion.section
      animate={
        animationHideStart && {
          opacity: 0,
          transition: transPrimary,
        }
      }
      className={c('OrasHero', {
        '-preAnimation': preAnimation,
        '-initial': initial,
      })}
      id={id}
    >
      <div className="OrasHero-wrap wrap">
        <div className="grid">
          <div
            className="
              OrasHero-figure grid-col
              grid-col:6 -start:7
              grid-col:4@m -start:7@m
              grid-col:4@l -start:7@l
            "
          >
            <figure
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-1.5"
              className="OrasHero-figure-img"
            >
              <Image
                alt="Oras faucet"
                height={2552}
                layout="responsive"
                onClick={onClick}
                src="/assets/oras/joonassandell-oras-hero.png"
                width={2192}
              />
            </figure>
            <motion.div
              animate={bg}
              className="OrasHero-figure-bg"
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
              className="OrasHero-drop OrasHero-drop--3"
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
                src="/assets/oras/drop.png"
                width={256}
              />
            </motion.div>
          </div>
          {preAnimation && (
            <motion.div
              animate={
                animationStart && {
                  opacity: 0,
                  transition: transPrimary,
                }
              }
              className="OrasHero-content grid-col grid-col:2@m -start:11@m grid-col:2@l -start:11@l"
            >
              <h2 className="OrasHero-content-heading Text -l">Oras</h2>
              <p className="OrasHero-content-text Text -s">
                UI, UX design <br />
                Web development <br />
                Concept strategy
              </p>
              <ButtonEnter
                className="OrasHero-content-button"
                href={oras.url}
                onClick={onClick}
              >
                View Oras project
              </ButtonEnter>
            </motion.div>
          )}
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
        className="OrasHero-drop OrasHero-drop--1"
      >
        <Image
          aria-hidden="true"
          height={256}
          layout="responsive"
          src="/assets/oras/drop.png"
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
        className="OrasHero-drop OrasHero-drop--2"
        initial={
          preAnimation && {
            opacity: 0,
            y: -120,
          }
        }
      >
        <div
          data-scroll
          data-scroll-delay="0.4"
          data-scroll-speed="1"
          data-scroll-position="top"
        >
          <Image
            aria-hidden="true"
            height={256}
            layout="responsive"
            src="/assets/oras/drop.png"
            width={256}
          />
        </div>
      </motion.div>
      <HeadingDisplay
        animate={headingDisplay}
        className="OrasHero-heading Heading Heading--display"
        onClick={onClick}
        {...(preAnimation && { 'aria-hidden': 'true' })}
      >
        <div
          className="Heading-inner"
          data-scroll
          data-scroll-position="top"
          data-scroll-offset="-10%"
          data-scroll-speed={scrollSpeed}
        >
          Oras—2016
          {/* Oras &middot; 2016 */}
        </div>
      </HeadingDisplay>
      {preAnimation && (
        <motion.div
          animate={
            animationStart && {
              opacity: 0,
              transition: transPrimary,
            }
          }
          className="OrasHero-buttonMobile wrap"
        >
          <div className="grid -placeEnd">
            <div className="grid-col">
              <ButtonEnter href={oras.url} onClick={onClick}>
                View Oras project
              </ButtonEnter>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
