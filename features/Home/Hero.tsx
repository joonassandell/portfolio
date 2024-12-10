import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { type ButtonEvent, type LinkEvent } from '@/types'
import { Figure } from '@/components/Figure'
import { Heading } from '@/components/Heading'
import { LINK, SITEMAP } from '@/lib/sitemap'
import { Link } from '@/components/Link'
import { m } from 'motion/react'
import { MQ, TRANS_DRAG, TRANS_TAP } from '@/lib/config'
import { TemplateArea } from '@/components/Template'
import { Text } from '@/components/Text'
import { useRouter } from 'next/router'
import { useState } from 'react'
import c from 'clsx'
import pfp from '@/public/common/joonassandell/joonassandell-pfp-with-avatar.jpg'
import PFPAvatar from '@/public/common/joonassandell/joonassandell-pfp-avatar.svg'

export const HomeHero = () => {
  const { pathname, replace } = useRouter()
  const handleExcludeHash = (e: LinkEvent & ButtonEvent) => {
    e.preventDefault()
    replace(pathname, undefined, { shallow: true })
  }
  const [dragPFP, setDragPFP] = useState(false)

  return (
    <TemplateArea
      className={c(
        'Template-hero flex flex-direction:column justify-content:end@m',
        {
          'is-drag:pfp': dragPFP,
        },
      )}
      grid={false}
      pt={false}
    >
      <div className="Template-hero-pfp mb:m mb:ml@l">
        <Figure
          alt="Joonas Sandell profile picture"
          animate={false}
          borderRadius="var(--border-radius-l)"
          className="Template-hero-pfp-figure"
          priority
          quality={90}
          sizes={`${MQ['xl']} 10vw, 6rem`}
          {...pfp}
        />
        <m.div
          className="Template-hero-pfp-svg"
          drag
          dragConstraints={{
            bottom: 80,
            left: -80,
            right: 80,
            top: -80,
          }}
          dragElastic={0.2}
          dragSnapToOrigin
          dragTransition={TRANS_DRAG}
          onDragEnd={() => setDragPFP(false)}
          onDragStart={() => setDragPFP(true)}
          transition={TRANS_TAP}
          whileDrag={{ cursor: 'grabbing', scale: 1.2 }}
          whileTap={{ cursor: 'grabbing', scale: 1.11 }}
        >
          <PFPAvatar aria-hidden />
        </m.div>
      </div>
      <div className="grid-col grid -gap -gap:row:0 align-items:start">
        <div className="grid-col grid-col:7@m grid-col:8@l grid-col:9@xl">
          <Heading className="mb:ml visible@l" size="h1">
            I design and develop interfaces, products, and beyond.
          </Heading>
          <Heading className="hidden@l" size="h2" tag="div">
            I design and develop interfaces, products, and beyond.
          </Heading>
          <div className="flex gap flex-wrap:wrap visible@m">
            <Button
              href="#selected-works"
              onClick={handleExcludeHash}
              scrollTo={{ offset: 0 }}
              variant="secondary"
            >
              Selected Works
            </Button>
            <Button href={SITEMAP.about.url} variant="secondary">
              About me
            </Button>
          </div>
        </div>
        <div className="Template-hero-now grid-col grid-col:5@m grid-col:4@l grid-col:3@xl">
          <Badge beacon beaconAnimate className="mb@m">
            Now
          </Badge>
          <Text className="mb:0 hidden@m" tag="p">
            Crafting new AI-driven experiences at{' '}
            <em>
              <Link href={LINK.workPlace.url} underline={false}>
                {LINK.workPlace.title}
              </Link>
            </em>
            . Learn more <Link href={SITEMAP.about.url}>about me</Link> or
            explore{' '}
            <Link
              href="#selected-works"
              onClick={handleExcludeHash}
              scrollTo={{ offset: 0 }}
            >
              selected works
            </Link>
            .
          </Text>
          <Text balance className="visible@m" tag="p">
            Crafting new AI-driven experiences at{' '}
            <em>
              <Link href={LINK.workPlace.url} underline={false}>
                {LINK.workPlace.title}
              </Link>
            </em>{' '}
            and building various side projects.
          </Text>
        </div>
      </div>
    </TemplateArea>
  )
}
