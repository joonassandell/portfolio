import { Figure } from '@/components/Figure';
import { getLink, getSitemap, stripUrl } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
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
    <Heading className="hidden@m" size="h6" tag="h4">
      Contact
    </Heading>
    <Text className="mb:m" size="s" tag="ul">
      <li>
        <Link href="mailto:me@joonassandell.com" target="_self" truncate>
          me@joonassandell.com
        </Link>
      </li>
      <li>Helsinki, Finland</li>
      <li>
        <Link href={getSitemap('contact', 'common').url} truncate>
          {getSitemap('contact', 'common').navTitle} me
        </Link>
      </li>
    </Text>
    <Text className="mb:l visible@m" size="s" tag="ul">
      <li>
        <Link href={getLink('linkedin').url} truncate>
          {stripUrl(getLink('linkedin').url)}
        </Link>
      </li>
      <li>
        <Link href={getLink('github').url} truncate>
          {stripUrl(getLink('github').url)}
        </Link>
      </li>
      <li>
        <Link href={getLink('dribbble').url} truncate>
          {stripUrl(getLink('dribbble').url)}
        </Link>
      </li>
      <li>
        <Link href={getLink('twitter').url} truncate>
          {stripUrl(getLink('twitter').url)}
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
        UI/UX design, Product design, Website design & development, Application
        design & development, Responsive design, Design systems & patterns,
        Animations
      </p>
    </Text>
  </aside>
);
