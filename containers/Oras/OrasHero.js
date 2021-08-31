import { motion } from 'framer-motion';
import { fadeOutVariants, scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { ButtonEnter } from '@/components/Button';
import Stamp from '@/components/Stamp';
import Link from '@/components/Link';
import {
  figureBgVariants,
  headingVariants,
  dropVariants,
  dropVariants2,
  dropVariants3,
} from './OrasHero.animations';
import Image from 'next/image';
import c from 'classnames';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

const oras = getSitemap('oras');

const OrasHero = ({
  id,
  onClick,
  priority = false,
  transitionHideStart = false,
  transitionStart = false,
  transitionState = null,
}) => {
  const preTransition = transitionState === 'pre';
  const classes = c('OrasHero', {
    '-transition:pre': preTransition,
    'is-transition': transitionStart,
  });
  const router = useRouter();
  const Heading = preTransition ? motion.h2 : motion.h1;
  const transitionStartOrInitial = transitionStart || !preTransition;
  const ref = useRef(null);
  const [mouseLeave, setMouseLeave] = useState(false);

  return (
    <motion.section
      animate={transitionStart ? 'exit' : transitionHideStart ? 'hidden' : ''}
      className={classes}
      data-id={id}
      data-scroll
      onAnimationComplete={() => {
        if (preTransition) router.push(oras.url, null, { scroll: false });
      }}
      onMouseEnter={() => setMouseLeave(false)}
      onMouseLeave={() => setMouseLeave(true)}
      ref={ref}
      variants={transitionHideStart ? fadeOutVariants : {}}
    >
      <Heading
        className="OrasHero-heading Heading Heading--display"
        onClick={onClick}
        variants={headingVariants}
      >
        <div
          className="Heading-inner"
          data-scroll
          data-scroll-offset="-10%"
          data-scroll-position="top"
          data-scroll-speed={scrollSpeed}
          data-scroll-direction="horizontal"
          // {...(preTransition && { 'data-scroll-speed': 3 })}
          // {...(preTransition && { 'data-scroll-direction': 'horizontal' })}
        >
          {/* Oras \ 2016 */}
          Oras — 2016
        </div>
      </Heading>
      <div className="OrasHero-wrap wrap">
        <div className="grid">
          <div
            className="
              OrasHero-figure grid-col
              grid-col:7 -start:6
              grid-col:6@s -start:7@s
              grid-col:4@l -start:7@l
            "
          >
            <figure
              data-scroll
              data-scroll-position="top"
              data-scroll-speed={-scrollSpeed}
              className="OrasHero-figure-img"
            >
              <Image
                alt="Oras faucet"
                draggable="false"
                height={2552}
                layout="responsive"
                onClick={onClick}
                priority
                quality="90"
                sizes="33vw"
                src="/assets/oras/joonassandell-oras-hero.png"
                width={2192}
              />
            </figure>
            <motion.div
              className="OrasHero-figure-bg"
              variants={figureBgVariants}
            />
            {transitionStartOrInitial && (
              <motion.div
                className="OrasHero-drop OrasHero-drop--1"
                {...(preTransition && {
                  initial: 'preTransition',
                  variants: dropVariants,
                })}
              >
                <Image
                  aria-hidden="true"
                  draggable="false"
                  height={256}
                  layout="responsive"
                  sizes="10vw"
                  src="/assets/oras/oras-drop.png"
                  width={256}
                  quality="90"
                  {...(priority && { priority: true })}
                />
              </motion.div>
            )}
          </div>
          {preTransition && (
            <div className="OrasHero-content grid-col grid-col:2@m -start:11@m grid-col:2@l -start:11@l">
              <p aria-hidden="true" className="OrasHero-content-heading h5">
                Oras
              </p>
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
            </div>
          )}
        </div>
      </div>
      {transitionStartOrInitial && (
        <motion.div
          className="OrasHero-drop OrasHero-drop--2"
          {...(preTransition && {
            initial: 'preTransition',
            variants: dropVariants2,
          })}
        >
          <Image
            aria-hidden="true"
            draggable="false"
            height={256}
            layout="responsive"
            sizes="10vw"
            src="/assets/oras/oras-drop.png"
            width={256}
            quality="90"
            {...(priority && { priority: true })}
          />
        </motion.div>
      )}
      {transitionStartOrInitial && (
        <motion.div
          className="OrasHero-drop OrasHero-drop--3"
          {...(preTransition && {
            initial: 'preTransition',
            variants: dropVariants3,
          })}
        >
          <div
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-position="top"
            data-scroll-speed="1"
          >
            <Image
              aria-hidden="true"
              draggable="false"
              height={256}
              layout="responsive"
              sizes="10vw"
              src="/assets/oras/oras-drop.png"
              width={256}
              quality="90"
              {...(priority && { priority: true })}
            />
          </div>
        </motion.div>
      )}
      {preTransition && (
        <div className="OrasHero-link wrap">
          <div className="grid -placeEnd">
            <div className="grid-col">
              <Link
                arrow
                href={oras.url}
                onClick={onClick}
                templateTransition={false}
                underline
              >
                View project
              </Link>
            </div>
          </div>
        </div>
      )}
      {preTransition && (
        <Stamp
          className="OrasHero-stamp"
          href={oras.url}
          iris="var(--oras-primary)"
          mouseRef={ref}
          mouseLeave={mouseLeave}
          onClick={onClick}
          transitionStart={transitionStart}
        />
      )}
    </motion.section>
  );
};

export default OrasHero;
