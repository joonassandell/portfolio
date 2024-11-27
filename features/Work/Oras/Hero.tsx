import { DROP_VARIANTS, DROP_VARIANTS_2, DROP_VARIANTS_3 } from './config'
import {
  FIGURE_BG_VARIANTS,
  Hero,
  HeroContent,
  type HeroProps,
} from '@/components/Hero'
import { m } from 'motion/react'
import { MQ } from '@/lib/config'
import { SITEMAP } from '@/lib/sitemap'
import { useParallax } from '@/lib/useParallax'
import drop from '@/public/oras/hero/joonassandell-oras-drop.png'
import heroImage from '@/public/oras/hero/joonassandell-oras-hero.png'
import Image from 'next/image'

export const OrasHero = ({ onClick, transition, ...props }: HeroProps) => {
  const {
    id,
    meta: { themeColor },
    title,
    url,
    year,
  } = SITEMAP.oras
  const dropDelay = 0.75
  const { ref, value: y } = useParallax({
    offset: transition === 'pre' ? 'start-end' : 'start-start',
    reverse: true,
    startPosition: transition === 'pre' ? 'negative' : 0,
  })
  const { value: dropY } = useParallax({
    offset: transition === 'pre' ? 'start-end' : 'start-start',
    ref,
    startPosition: transition === 'pre' ? 'negative' : 0,
  })

  return (
    <Hero
      className="Hero--oras"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      innerRef={ref}
      onClick={onClick}
      themeColor={themeColor}
      transition={transition}
      {...props}
    >
      {({
        noTransition,
        transitionInitial,
        transitionPre,
        transitionStartOrDefault,
      }) => (
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
                <m.figure
                  className="Hero-figure-figure"
                  data-lock-ios
                  style={{ y }}
                >
                  <Image
                    alt="Oras faucet"
                    draggable="false"
                    priority={!transitionPre}
                    quality={60}
                    sizes={`${MQ.ml} 33vw, 50vw`}
                    src={heroImage}
                  />
                </m.figure>
                <m.div
                  className="Hero-figure-bg Hero-figure-bg--animate"
                  variants={FIGURE_BG_VARIANTS}
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
                    variants={DROP_VARIANTS}
                  >
                    <Image
                      alt="Oras drop"
                      aria-hidden
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
              variants={DROP_VARIANTS_2}
            >
              <Image
                alt="Oras drop"
                aria-hidden
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
            variants={DROP_VARIANTS_3}
          >
            <m.div data-lock-ios style={{ y: dropY }}>
              <Image
                alt="Oras drop"
                aria-hidden
                draggable="false"
                priority={!transitionPre}
                quality={90}
                sizes="10vw"
                src={drop}
              />
            </m.div>
          </m.div>
        </>
      )}
    </Hero>
  )
}
