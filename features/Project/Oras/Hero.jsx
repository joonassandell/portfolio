import { m } from 'framer-motion';
import { SCROLL_SPEED } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import { Hero, HeroContent, figureBgVariants } from '@/components/Hero';
import { dropVariants, dropVariants2, dropVariants3 } from './Hero.animations';
import Image from 'next/image';
import heroImage from '@/public/oras/hero/joonassandell-oras-hero.png';
import drop from '@/public/oras/hero/joonassandell-oras-drop.png';

const { url, id, title, year } = getSitemap('oras');

export const OrasHero = ({ onClick, ...props }) => {
  return (
    <Hero
      className="Hero--oras"
      heading={`Oras — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      {...props}
    >
      {({
        transitionStartOrDefault,
        initialDelay,
        transitionPre,
        transitionPreOrInitial,
        transitionInitial,
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
                    data-scroll
                    data-scroll-target={`[data-scroll-id=${id}]`}
                    data-scroll-speed={-SCROLL_SPEED}
                    className="Hero-figure-figure"
                  >
                    <Image
                      alt="Oras faucet"
                      draggable="false"
                      priority
                      sizes="33vw"
                      src={heroImage}
                      quality="90"
                    />
                  </figure>
                  <m.div
                    className="Hero-figureBg Hero-figureBg--animate"
                    variants={figureBgVariants}
                  />
                  {transitionStartOrDefault && (
                    <m.div
                      className="Hero-drop Hero-drop--1"
                      {...(transitionInitial && {
                        animate: 'animate',
                        initial: 'initial',
                      })}
                      custom={{
                        delay: initialDelay,
                        enableInitial: transitionPreOrInitial,
                      }}
                      variants={dropVariants}
                    >
                      <Image
                        alt="Oras drop"
                        aria-hidden="true"
                        draggable="false"
                        priority
                        sizes="10vw"
                        src={drop}
                        quality="90"
                      />
                    </m.div>
                  )}
                </div>
                <HeroContent
                  className="grid-col grid-col:3 -start:10"
                  heading={title}
                  href={url}
                  onClick={onClick}
                  transitionPre={transitionPre}
                  role={['UI/UX design', 'Concept strategy', 'Web development']}
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
                custom={{
                  delay: initialDelay,
                  enableInitial: transitionPreOrInitial,
                }}
                variants={dropVariants2}
              >
                <Image
                  alt="Oras drop"
                  aria-hidden="true"
                  draggable="false"
                  priority
                  sizes="10vw"
                  src={drop}
                  quality="90"
                />
              </m.div>
            )}
            <m.div
              className="Hero-drop Hero-drop--3"
              {...(transitionInitial && {
                animate: 'animate',
                initial: 'initial',
              })}
              custom={{
                delay: initialDelay,
                enableInitial: transitionPreOrInitial,
              }}
              variants={dropVariants3}
            >
              <div
                data-scroll
                data-scroll-delay="0.15"
                data-scroll-target={`[data-scroll-id=${id}]`}
                data-scroll-speed="1"
              >
                <Image
                  alt="Oras drop"
                  aria-hidden="true"
                  draggable="false"
                  priority
                  sizes="10vw"
                  src={drop}
                  quality="90"
                />
              </div>
            </m.div>
          </>
        );
      }}
    </Hero>
  );
};
