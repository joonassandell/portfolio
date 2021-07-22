import { motion } from 'framer-motion';
import { fadeOutVariants, scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import useIsMobile from '@/lib/useIsMobile';
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
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const oras = getSitemap('oras');

const OrasHero = ({
  transitionStart = false,
  transitionHideStart = false,
  transitionState = null,
  id,
  onClick,
  priority = false,
}) => {
  const isMobile = useIsMobile();
  const preTransition = transitionState === 'pre';
  const classes = c('OrasHero', {
    '-transition:pre': preTransition,
    'is-transition': transitionStart,
  });
  const router = useRouter();
  const Heading = preTransition ? motion.h2 : motion.h1;
  const transitionStartOrInitial = transitionStart || !transitionState;
  const ref = useRef(null);
  const [mouseLeave, setMouseLeave] = useState(false);

  useEffect(() => {
    if (transitionStart) router.push(oras.url, null, { scroll: false });
  }, [transitionStart]);

  return (
    <motion.section
      animate={transitionHideStart}
      className={classes}
      id={id}
      ref={ref}
      onMouseEnter={() => setMouseLeave(false)}
      onMouseLeave={() => setMouseLeave(true)}
      variants={fadeOutVariants}
    >
      <Heading
        className="OrasHero-heading Heading Heading--display"
        onClick={onClick}
        custom={isMobile}
        variants={headingVariants}
        {...(transitionStart && { exit: 'exit' })}
      >
        <div
          className="Heading-inner"
          data-scroll
          data-scroll-offset="-10%"
          data-scroll-position="top"
          data-scroll-speed={scrollSpeed}
          {...(preTransition && { 'data-scroll-speed': 3 })}
          {...(preTransition && { 'data-scroll-direction': 'horizontal' })}
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
                sizes="33vw"
                src="/assets/oras/joonassandell-oras-hero.png"
                width={2192}
                quality="90"
                {...(priority && { priority: true })}
              />
            </figure>
            <motion.div
              className="OrasHero-figure-bg"
              custom={isMobile}
              variants={figureBgVariants}
              {...(transitionStart && { exit: 'exit' })}
            />
            {transitionStartOrInitial && (
              <motion.div
                className="OrasHero-drop OrasHero-drop--1"
                custom={isMobile}
                variants={dropVariants}
                {...(transitionStart && { exit: 'exit' })}
                {...(preTransition && { initial: 'preTransition' })}
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
          custom={isMobile}
          variants={dropVariants2}
          {...(transitionStart && { exit: 'exit' })}
          {...(preTransition && { initial: 'preTransition' })}
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
          custom={isMobile}
          variants={dropVariants3}
          {...(preTransition && { initial: 'preTransition' })}
          {...(transitionStart && { exit: 'exit' })}
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
        <motion.div
          className="OrasHero-link wrap"
          {...(transitionStart && { exit: 'exit' })}
          {...(transitionStart && { variants: fadeOutVariants })}
        >
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
        </motion.div>
      )}
      {preTransition && (
        <Stamp
          className="OrasHero-stamp"
          iris="var(--oras-primary)"
          mouseRef={ref}
          mouseLeave={mouseLeave}
          transitionStart={transitionStart}
        />
      )}
    </motion.section>
  );
};

export default OrasHero;
