import { FIGURE_BG_VARIANTS, Hero, type HeroProps } from '@/components/Hero'
import { FIGURE_INNER_VARIANTS } from '@/features/Work/Mediasignal/config'
import { m } from 'motion/react'
import { MQ } from '@/lib/config'
import { SITEMAP } from '@/lib/sitemap'
import { useParallax } from '@/lib/useParallax'
import heroImage from '@/public/archive/hero/joonassandell-archive-hero.png'
import Image from 'next/image'

export const ArchiveHero = ({ onClick, ...props }: HeroProps) => {
  const { id, title, url, year } = SITEMAP.archive
  const { ref, value: y } = useParallax({
    offset: 'start-start',
    reverse: true,
  })

  return (
    <Hero
      className="Hero--mediasignal Hero--archive"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      innerRef={ref}
      onClick={onClick}
      {...props}
    >
      {({ noTransition, transitionInitial }) => (
        <div className="wrap grid -gap:l pl:0@max:l">
          <div className="Hero-figure grid-col grid-col:6 grid-col:5@l -start:4@l">
            <m.figure className="Hero-figure-figure" style={{ y }}>
              <m.div
                {...(transitionInitial && {
                  animate: 'animate',
                  initial: 'initial',
                })}
                {...(noTransition && { initial: 'animate' })}
                custom={{ delay: 0.1 }}
                variants={FIGURE_INNER_VARIANTS}
              >
                <Image
                  alt="Vapriikki home page sketch in iPad"
                  draggable="false"
                  priority
                  quality={60}
                  sizes={`${MQ.l} 60vw, 90vw`}
                  src={heroImage}
                />
              </m.div>
            </m.figure>
            <m.div
              className="Hero-figure-bg Hero-figure-bg--animate"
              variants={FIGURE_BG_VARIANTS}
            />
          </div>
        </div>
      )}
    </Hero>
  )
}
