import { APP } from '@/lib/config'
import { Figure } from '@/components/Figure'
import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { LINK, SITEMAP } from '@/lib/sitemap'
import { stripUrl } from '@/lib/utils'
import { Text } from '@/components/Text'
import profile from '@/public/images/joonassandell-2.jpg'

export const ResumeAside = () => (
  <aside className="Template-aside grid-col grid-col:3@m text-wrap:balance">
    <Figure
      alt="Joonas Sandell profile picture"
      animate={false}
      borderRadius="var(--border-radius-full)"
      className="Template-profile mb:l visible@m"
      priority
      sizes="15vw"
      {...profile}
    />
    <Heading className="mb:s hidden@m" size="h6" tag="h4">
      Contact
    </Heading>
    <Text className="mb:m" size="s" tag="ul">
      <li>
        <Link href={`mailto:${APP.person.email}`} target="_self" truncate>
          {APP.person.email}
        </Link>
      </li>
      <li>
        <Link href={SITEMAP.contact.url} truncate>
          Send me a message
        </Link>
      </li>
    </Text>
    <Text className="mb:l visible@m" size="s" tag="ul">
      <li>
        <Link href={LINK.linkedIn.url} truncate>
          {stripUrl(LINK.linkedIn.url)}
        </Link>
      </li>
      <li>
        <Link href={LINK.github.url} truncate>
          {stripUrl(LINK.github.url)}
        </Link>
      </li>
    </Text>
    <Heading className="mb:s" size="h6" tag="h4">
      Skills
    </Heading>
    <Text className="mb" size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Design
      </Text>
      <p>
        UI/UX design, Design systems, Design thinking, Figma expert,
        User-centered design, Information architecture, Prototyping and
        wireframing, Visual and responsive design
      </p>
    </Text>
    <Text className="mb" size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Development
      </Text>
      <p>Sofware development, Web development, Animations</p>
    </Text>
    <Text className="mb" size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Languages
      </Text>
      <p>
        TypeScript, JavaScript, Node.js, CSS, Sass, HTML, PHP, Bash, English
        (fluent), Finnish (native)
      </p>
    </Text>
    <Text className="mb" size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Relevant technologies
      </Text>
      <p>
        React, Next.js, Tailwind CSS, GSAP, Motion, Git, Storybook, Supabase,
        Firebase, Databases, GraphQL, WordPress, Bundlers, AWS, Apache, Unix,
        Redux, Zustand
      </p>
    </Text>
    <Text className="mb:l" size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Design applications
      </Text>
      <p>Figma, Sketch, Adobe CC</p>
    </Text>
    <Heading className="mb:s" size="h6" tag="h4">
      Selected projects
    </Heading>
    <Text className="mb" size="s">
      <p className="mb:2xs">
        <Link href={SITEMAP.biocode.url}>Biocode</Link>
      </p>
      <p>Case study of the various projects I have crafted for Biocode.</p>
    </Text>
    <Text className="mb:l" size="s">
      <p className="mb:2xs">
        <Link href={SITEMAP.uiLab.url}>UI Laboratory</Link>
      </p>
      <p>
        Showcase of various UI component experiments and interactive design
        concepts.
      </p>
    </Text>
    <Heading className="mb:s" size="h6" tag="h4">
      Education
    </Heading>
    <Text size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        2011 – 2013
      </Text>
      <p>Degree in Audiovisual communications at TAKK</p>
    </Text>
  </aside>
)
