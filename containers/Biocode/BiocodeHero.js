import { motion } from 'framer-motion';
import { fadeOutVariants, scrollSpeed } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { ButtonEnter } from '@/components/Button';
import Stamp from '@/components/Stamp';
import TextReveal from '@/components/TextReveal';
import Link from '@/components/Link';
import { headingVariants, figurePreVariants } from './BiocodeHero.animations';
import Image from 'next/image';
import c from 'classnames';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

const biocode = getSitemap('biocode');

const BiocodeHero = ({
  id,
  onClick,
  transitionHideStart = false,
  transitionStart = false,
  transitionState = null,
}) => {
  const preTransition = transitionState === 'pre';
  const classes = c('BiocodeHero', {
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
      onAnimationComplete={() => {
        if (preTransition && transitionStart)
          router.push(biocode.url, null, { scroll: false });
      }}
      onMouseEnter={() => setMouseLeave(false)}
      onMouseLeave={() => setMouseLeave(true)}
      ref={ref}
      variants={transitionHideStart ? fadeOutVariants : {}}
    >
      <Heading
        className="BiocodeHero-heading Heading Heading--display"
        onClick={onClick}
        variants={headingVariants}
      >
        <div
          className="Heading-inner"
          data-scroll
          data-scroll-offset="-10%"
          data-scroll-position="top"
          data-scroll-speed={scrollSpeed}
          {...(preTransition && { 'data-scroll-direction': 'horizontal' })}
        >
          Biocode — 2021
        </div>
      </Heading>
      {transitionStartOrInitial && (
        <div className="BiocodeHero-textReveal">
          <TextReveal text={['We have to', 'reverse global', 'heating']} />
        </div>
      )}
      <div className="BiocodeHero-wrap wrap">
        <div className="grid">
          <div
            className="BiocodeHero-figure
              grid-col
              grid-col:7 -start:6
              grid-col:6@s -start:7@s
              grid-col:5@l -start:7@l
              -start:6@xl
            "
          >
            <div
              className="BiocodeHero-figure-mask"
              data-scroll
              data-scroll-position="top"
              // data-scroll-speed={scrollSpeed * -3}
              // data-scroll-speed={scrollSpeed * -2}
            >
              {preTransition && (
                <motion.figure
                  animate={transitionStart ? 'exit' : ''}
                  className="BiocodeHero-figure-figure
                  BiocodeHero-figure-figure--pre"
                  initial="preTransition"
                  variants={figurePreVariants}
                >
                  <div
                    className="BiocodeHero-figure-scroll"
                    data-scroll
                    data-scroll-position="top"
                    // data-scroll-speed={scrollSpeed}
                    data-scroll-speed={scrollSpeed * -5}
                  >
                    <Image
                      alt="Dark landscape of mountains"
                      draggable="false"
                      height={1120}
                      layout="responsive"
                      onClick={onClick}
                      priority
                      quality="90"
                      sizes="33vw"
                      src="/assets/biocode/joonassandell-biocode-hero-pre.jpg"
                      width={880}
                    />
                  </div>
                </motion.figure>
              )}
              {transitionStartOrInitial && (
                <motion.figure
                  className="BiocodeHero-figure-figure
                  BiocodeHero-figure-figure--initial"
                >
                  <div
                    className="BiocodeHero-figure-scroll"
                    data-scroll
                    data-scroll-position="top"
                    // data-scroll-speed={scrollSpeed}
                    data-scroll-speed={scrollSpeed * -5}
                  >
                    <Image
                      alt="Bright landscape of field"
                      draggable="false"
                      height={1120}
                      layout="responsive"
                      priority
                      quality="90"
                      sizes="33vw"
                      src="/assets/biocode/joonassandell-biocode-hero.jpg"
                      width={880}
                    />
                  </div>
                </motion.figure>
              )}
            </div>
            <div className="BiocodeHero-figure-bg" />
          </div>
          {preTransition && (
            <div className="BiocodeHero-content grid-col grid-col:2@m -start:11@m grid-col:2@l -start:11@l">
              <p aria-hidden="true" className="BiocodeHero-content-heading h5">
                Biocode
              </p>
              <p className="BiocodeHero-content-text Text -s">
                UI, UX design <br />
                App development <br />
                Web development
              </p>
              <ButtonEnter
                className="BiocodeHero-content-button"
                href={biocode.url}
                onClick={onClick}
              >
                View Oras project
              </ButtonEnter>
            </div>
          )}
        </div>
      </div>
      {preTransition && (
        <div className="BiocodeHero-link wrap">
          <div className="grid -placeEnd">
            <div className="grid-col">
              <Link
                arrow
                href={biocode.url}
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
          className="BiocodeHero-stamp"
          href={biocode.url}
          iris="var(--biocode-primary)"
          mouseLeave={mouseLeave}
          mouseRef={ref}
          onClick={onClick}
          overlayBg="var(--biocode-bg)"
          transitionStart={transitionStart}
        />
      )}
    </motion.section>
  );
};

export default BiocodeHero;
