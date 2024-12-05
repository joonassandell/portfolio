import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { type ButtonEvent, type LinkEvent } from '@/types'
import { Figure } from '@/components/Figure'
import { Heading } from '@/components/Heading'
import { LINK, SITEMAP } from '@/lib/sitemap'
import { Link } from '@/components/Link'
import { TemplateArea } from '@/components/Template'
import { Text } from '@/components/Text'
import { useRouter } from 'next/router'
import avatar from '@/public/common/joonassandell/joonassandell-avatar.jpg'

export const HomeHero = () => {
  const { pathname, replace } = useRouter()
  const handleExcludeHash = (e: LinkEvent & ButtonEvent) => {
    e.preventDefault()
    replace(pathname, undefined, { shallow: true })
  }

  const heading = 'I design and develop interfaces, products, and beyond.'
  const now = {
    desktop: (
      <>
        Crafting new AI-driven experiences at{' '}
        <em>
          <Link href={LINK.workPlace.url} underline={false}>
            {LINK.workPlace.title}
          </Link>
        </em>{' '}
        and building various side projects.
      </>
    ),
    mobile: (
      <>
        Crafting new AI-driven experiences at{' '}
        <em>
          <Link href={LINK.workPlace.url} underline={false}>
            {LINK.workPlace.title}
          </Link>
        </em>
        . Learn more <Link href={SITEMAP.about.url}>about me</Link> or explore{' '}
        <Link
          href="#selected-works"
          onClick={handleExcludeHash}
          scrollTo={{ offset: 0 }}
        >
          selected works
        </Link>
        .
      </>
    ),
  }

  return (
    <TemplateArea
      className="Template-hero flex flex-direction:column justify-content:end@m"
      grid={false}
      pt={false}
    >
      <Figure
        alt="Joonas Sandell avatar picture"
        animate={false}
        borderRadius="var(--border-radius-l)"
        className="Template-hero-avatar mb:m mb:ml@m"
        priority
        sizes="15vw"
        {...avatar}
      />
      <div className="grid-col grid -gap:0 align-items:start">
        <div className="grid-col grid-col:7@m grid-col:8@l grid-col:9@xl">
          <Heading className="mb:ml@m visible@xl" size="h1">
            {heading}
          </Heading>
          <Heading className="mb:ml@m hidden@xl" size="h2" tag="div">
            {heading}
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
          <Text className="hidden@m">{now.mobile}</Text>
          <Text balance className="visible@m">
            {now.desktop}
          </Text>
        </div>
      </div>
    </TemplateArea>
  )
}
