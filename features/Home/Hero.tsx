import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { type ButtonEvent, type LinkEvent } from '@/types'
import { Figure } from '@/components/Figure'
import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { LINK, SITEMAP } from '@/lib/sitemap'
import {
  m,
  useDragControls,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import { MQ, TRANS_DRAG, TRANS_SPRING, TRANS_TAP } from '@/lib/config'
import { TemplateArea } from '@/components/Template'
import { Text } from '@/components/Text'
import { useApp } from '@/components/App'
import { useRouter } from 'next/router'
import { useState } from 'react'
import c from 'clsx'
import pfp from '@/public/common/joonassandell/joonassandell-pfp-with-avatar.jpg'
import PfpAvatar from '@/public/common/joonassandell/joonassandell-pfp-avatar.svg'

export const HomeHero = () => {
  const { pathname, replace } = useRouter()
  const {
    detect: { hasTouch },
  } = useApp()
  const handleExcludeHash = (e: LinkEvent & ButtonEvent) => {
    e.preventDefault()
    replace(pathname, undefined, { shallow: true })
  }
  const [pfpDrag, setPfpDrag] = useState(false)
  const [pfpActive, setPfpActive] = useState(false)
  const [pfpHover, setPfpHover] = useState(false)
  const [pfpPress, setPfpPress] = useState(false)

  const dragControls = useDragControls()
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)
  const dragDistance = useTransform(
    [dragX, dragY],
    ([x, y]: number[]) => Math.sqrt(x * x + y * y), // Distance from the center
  )
  const figureScaleTrans = useTransform(dragDistance, [-40, 0, 40], [1, 0.5, 1])
  const figureScale = useSpring(figureScaleTrans, TRANS_SPRING.fast)

  return (
    <TemplateArea
      className={c(
        'Template-hero flex flex-direction:column justify-content:end@m',
        {
          'is-active:pfp': pfpActive,
          'is-drag:pfp': pfpDrag,
        },
      )}
      grid={false}
      pt={false}
    >
      <div
        className="Template-hero-pfp mb:m mb:ml@l"
        style={{
          cursor: pfpPress || pfpDrag ? 'grabbing' : 'grab',
        }}
      >
        <m.div
          className="Template-hero-pfp-figure"
          style={{ opacity: figureScale, scale: figureScale }}
          transition={TRANS_TAP}
        >
          <Figure
            alt="Joonas Sandell profile picture"
            animate={false}
            priority
            quality={90}
            sizes={`${MQ['xl']} 10vw, 7rem`}
            {...pfp}
          />
        </m.div>
        <m.div
          animate={{
            scale: pfpPress ? 0.9 : 1,
          }}
          className="Template-hero-pfp-avatar"
          drag
          dragConstraints={{
            bottom: 80,
            left: -80,
            right: 80,
            top: -80,
          }}
          dragControls={dragControls}
          dragElastic={0.3}
          dragSnapToOrigin
          dragTransition={TRANS_DRAG}
          onDrag={(_, info) => {
            dragX.set(info.offset.x)
            dragY.set(info.offset.y)
          }}
          onDragEnd={() => {
            dragX.set(0)
            dragY.set(0)
            setPfpDrag(false)
            if (!pfpHover) setPfpActive(false)
          }}
          onDragStart={() => {
            setPfpDrag(true)
            setPfpPress(false)
          }}
          transition={TRANS_TAP}
        >
          <PfpAvatar aria-hidden />
        </m.div>
        <div
          className="Template-hero-pfp-boundary"
          onPointerDown={e => {
            dragControls.start(e)
            setPfpPress(true)
          }}
          onPointerEnter={() => {
            setPfpActive(true)
            if (!hasTouch) setPfpHover(true)
          }}
          onPointerLeave={() => {
            if (!pfpDrag && !pfpPress) setPfpActive(false)
            if (!hasTouch) setPfpHover(false)
          }}
          onPointerUp={() => setPfpPress(false)}
        />
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
