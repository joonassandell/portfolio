import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Figure } from '@/components/Figure'
import { Heading } from '@/components/Heading'
import { LINK, SITEMAP } from '@/lib/sitemap'
import { Link } from '@/components/Link'
import { TemplateArea } from '@/components/Template'
import { Text } from '@/components/Text'
import avatar from '@/public/images/joonassandell-avatar.jpg'

export const HomeAbout = () => (
  <TemplateArea
    className="Template-about flex flex-direction:column justify-content:end@m"
    grid={false}
    pt={false}
  >
    <Figure
      alt="Joonas Sandell avatar picture"
      animate={false}
      className="Template-avatar mb:m"
      priority
      sizes="15vw"
      {...avatar}
    />
    <div className="grid-col grid -gap:0 align-items:start">
      <div className="grid-col grid-col:7@m grid-col:8@l grid-col:9@xl">
        <Heading className="Template-heading visible@xl" size="h1">
          I design and develop interfaces, products, and beyond.
        </Heading>
        <Heading className="Template-heading hidden@xl" size="h2" tag="div">
          I design and develop interfaces, products, and beyond.
        </Heading>
        <div className="flex gap justify-content:center@max:m">
          <Button href="#selected-works" variant="secondary">
            Selected Works
          </Button>
          <Button href={SITEMAP.about.url} variant="secondary">
            About me
          </Button>
        </div>
      </div>
      <div className="grid-col grid-col:5@m grid-col:4@l grid-col:3@xl visible@m">
        <Badge beacon className="mb:m">
          Now
        </Badge>
        <Text tag="p">
          Crafting new AI-driven experiences at{' '}
          <em>
            <Link href={LINK.workPlace.url}>{LINK.workPlace.title}</Link>
          </em>
        </Text>
      </div>
    </div>
  </TemplateArea>
)
