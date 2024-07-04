import { EXTERNAL_LINKS, SITEMAP } from '@/lib/sitemap';
import { Figure } from '@/components/Figure';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { stripUrl } from '@/lib/utils';
import { Text } from '@/components/Text';
import profile from '@/public/images/joonassandell-profile-2.jpg';

export const Aside = () => (
  <aside className="Template-aside grid-col grid-col:3@m">
    <Figure
      alt="Joonas Sandell profile picture"
      animate={false}
      borderRadius="var(--border-radius-pill)"
      className="Template-profile mb:l visible@m"
      priority
      sizes="20vw"
      {...profile}
    />
    <Heading className="mb:xs hidden@m" size="h6" tag="h4">
      Contact
    </Heading>
    <Text className="mb:l" size="s" tag="ul">
      <li>
        E-mail:{' '}
        <Link href="mailto:me@joonassandell.com" target="_self" truncate>
          me@joonassandell.com
        </Link>
      </li>
      <li>Location: Helsinki, Finland</li>
      <li>
        <Link href={SITEMAP.contact.url} truncate>
          Send me a message
        </Link>
      </li>
    </Text>
    <Text className="mb:l visible@m" size="s" tag="ul">
      <li>
        <Link href={EXTERNAL_LINKS.linkedIn.url} truncate>
          {stripUrl(EXTERNAL_LINKS.linkedIn.url)}
        </Link>
      </li>
      <li>
        <Link href={EXTERNAL_LINKS.github.url} truncate>
          {stripUrl(EXTERNAL_LINKS.github.url)}
        </Link>
      </li>
      <li>
        <Link href={EXTERNAL_LINKS.dribbble.url} truncate>
          {stripUrl(EXTERNAL_LINKS.dribbble.url)}
        </Link>
      </li>
      <li>
        <Link href={EXTERNAL_LINKS.twitter.url} truncate>
          {stripUrl(EXTERNAL_LINKS.twitter.url)}
        </Link>
      </li>
    </Text>
    <Heading size="h6" tag="h4">
      Skills
    </Heading>
    <Text className="mb:m" size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Languages
      </Text>
      <p>
        TypeScript, JavaScript, Node.js, CSS, Sass, HTML, PHP, Bash, English
        (fluent), Finnish (native)
      </p>
    </Text>
    <Text className="mb:m" size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Essential tech
      </Text>
      <p>
        React, Next.js, Bundlers, Git, Databases, GraphQL, Storybook, WordPress,
        Firebase, AWS, Apache, Unix, GSAP, Framer motion, ChatGPT, Redux,
        Zustand
      </p>
    </Text>
    <Text className="mb:m" size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Design tools
      </Text>
      <p>Figma, Sketch, Adobe CC</p>
    </Text>
    <Text size="s">
      <Text className="mb:2xs" color="mute" tag="p">
        Competencies
      </Text>
      <p>
        UI/UX design, Product design, Website design & development, Software
        design & development, Responsive design, Design systems & patterns,
        Animations
      </p>
    </Text>
  </aside>
);
