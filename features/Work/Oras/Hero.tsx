import { dropVariants, dropVariants2, dropVariants3 } from './Hero.animations';
import {
  figureBgVariants,
  Hero,
  HeroContent,
  type HeroProps,
} from '@/components/Hero';
import { JUMP_FIX_VARIANTS, MQ, SCROLL_SPEED } from '@/lib/config';
import { m } from 'framer-motion';
import { SITEMAP } from '@/lib/sitemap';
import drop from '@/public/oras/hero/joonassandell-oras-drop.png';
import heroImage from '@/public/oras/hero/joonassandell-oras-hero.png';
import Image from 'next/image';

export const OrasHero = ({ onClick, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
    year,
  } = SITEMAP.oras;
  const dropDelay = 0.75;

  return (
    <Hero
      className="Hero--oras"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      themeColor={themeColor}
      {...props}
    >
      {({
        noTransition,
        templateTransition,
        transitionInitial,
        transitionPre,
        transitionStartOrDefault,
      }) => {
        return (
          <>
            <div className="wrap">
              <div className="grid -gap:l">
                <div
                  className="
                    Hero-figure grid-col
                    grid-col:7 -start:6
                    grid-col:6@s -start:7@s
                    grid-col:4@l -start:6@l
                  "
                >
                  <figure
                    className="Hero-figure-figure"
                    data-scroll
                    data-scroll-prevent
                    data-scroll-speed={-SCROLL_SPEED}
                    data-scroll-target={`[data-scroll-id=${id}]`}
                  >
                    <m.div
                      {...(transitionPre && {
                        animate: 'animate',
                        initial: templateTransition && 'initial',
                        variants: JUMP_FIX_VARIANTS,
                      })}
                    >
                      <Image
                        alt="Oras faucet"
                        draggable="false"
                        priority={!transitionPre}
                        quality={60}
                        sizes={`${MQ.ml} 33vw, 50vw`}
                        src={heroImage}
                      />
                    </m.div>
                  </figure>
                  <m.div
                    className="Hero-figure-bg Hero-figure-bg--animate"
                    variants={figureBgVariants}
                  />
                  {transitionStartOrDefault && (
                    <m.div
                      className="Hero-drop Hero-drop--1"
                      {...(transitionInitial && {
                        animate: 'animate',
                        initial: 'initial',
                      })}
                      {...(noTransition && { initial: 'animate' })}
                      custom={{ delay: transitionInitial ? dropDelay : 0 }}
                      variants={dropVariants}
                    >
                      <Image
                        alt="Oras drop"
                        aria-hidden="true"
                        draggable="false"
                        quality={90}
                        sizes="10vw"
                        src={drop}
                      />
                    </m.div>
                  )}
                </div>
                <HeroContent
                  className="grid-col grid-col:3 -start:10"
                  heading={title}
                  href={url}
                  onClick={onClick}
                  role={['UI/UX design', 'Concept strategy', 'Web development']}
                  transitionPre={transitionPre}
                />
              </div>
            </div>
            {transitionStartOrDefault && (
              <m.div
                className="Hero-drop Hero-drop--2"
                {...(transitionInitial && {
                  animate: 'animate',
                  initial: 'initial',
                })}
                {...(noTransition && { initial: 'animate' })}
                custom={{ delay: transitionInitial ? dropDelay : 0 }}
                variants={dropVariants2}
              >
                <Image
                  alt="Oras drop"
                  aria-hidden="true"
                  draggable="false"
                  quality={90}
                  sizes="10vw"
                  src={drop}
                />
              </m.div>
            )}
            <m.div
              className="Hero-drop Hero-drop--3"
              {...(transitionInitial && {
                animate: 'animate',
                initial: 'initial',
              })}
              {...(noTransition && { initial: 'animate' })}
              custom={{ delay: transitionInitial ? dropDelay : 0 }}
              variants={dropVariants3}
            >
              <div
                data-scroll
                data-scroll-delay={0.15}
                data-scroll-speed={0.06}
                data-scroll-target={`[data-scroll-id=${id}]`}
              >
                <Image
                  alt="Oras drop"
                  aria-hidden="true"
                  draggable="false"
                  priority={!transitionPre}
                  quality={90}
                  sizes="10vw"
                  src={drop}
                />
              </div>
            </m.div>
          </>
        );
      }}
    </Hero>
  );
};
