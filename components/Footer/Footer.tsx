import { type FooterProps } from './';
import { getLink, getSitemap } from '@/lib/utils';
import { Link } from '@/components/Link';
import { LinkRoll } from '@/components/LinkRoll';
import { LINKS, SITEMAP } from '@/lib/config';
import { SomeIcons } from '@/components/SomeIcons';
import { Text } from '@/components/Text';
import c from 'clsx';

export const Footer = ({ className, fullWidth }: FooterProps) => {
  const classes = c(className, 'Footer wrap', {
    '-width:full': fullWidth,
  });

  return (
    <footer className={classes}>
      <div className="Footer-inner">
        <div className="Footer-main">
          <div className="grid">
            <div className="grid-col grid-col:8@m">
              <div className="grid -gap:row:l">
                <div className="grid-col grid-col:5 grid-col:4@s">
                  <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                    Me
                  </Text>
                  <Text tag="ul">
                    <li>
                      <LinkRoll href={getSitemap('about', 'common').url}>
                        {getSitemap('about', 'common').navTitle}
                      </LinkRoll>
                    </li>
                    <li>
                      <LinkRoll href={getSitemap('milestones', 'common').url}>
                        {getSitemap('milestones', 'common').navTitle}
                      </LinkRoll>
                    </li>
                    <li>
                      <LinkRoll href={getSitemap('approach', 'common').url}>
                        {getSitemap('approach', 'common').navTitle}
                      </LinkRoll>
                    </li>
                    <li>
                      <LinkRoll href={getSitemap('resume', 'common').url}>
                        {getSitemap('resume', 'common').navTitle}
                      </LinkRoll>
                    </li>
                    <li>
                      <LinkRoll href={getSitemap('contact', 'common').url}>
                        {getSitemap('contact', 'common').navTitle}
                      </LinkRoll>
                    </li>
                  </Text>
                </div>
                <div className="grid-col grid-col:5 grid-col:4@s">
                  <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                    Work
                  </Text>
                  <Text tag="ul">
                    {SITEMAP.project
                      .filter(item => !item.hidden && item.id != 'home')
                      .map(item => {
                        return (
                          <li key={item.id}>
                            <LinkRoll href={item.url}>{item.navTitle}</LinkRoll>
                          </li>
                        );
                      })}
                  </Text>
                </div>
                <div className="grid-col grid-col:4@s">
                  <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                    Socials
                  </Text>
                  <SomeIcons className="hidden@s" />
                  <Text className="visible@s" tag="ul">
                    {LINKS.social.map(item => {
                      return (
                        <li key={item.id}>
                          <LinkRoll href={item.url}>{item.title}</LinkRoll>
                        </li>
                      );
                    })}
                  </Text>
                </div>
              </div>
            </div>
            <div className="Footer-nameCol grid-col grid-col:4@m">
              <Text className="mb:2xs mb@m" tag="p">
                <span className="hidden@m">Joonas Sandell</span>
                <Link
                  className="visible@m"
                  href={getSitemap('home', 'common').url}
                >
                  Joonas Sandell
                </Link>
              </Text>
              <Text className="mb:m" color="mute:blend" size="s" tag="p">
                UI/UX designer
                <span className="hidden@m">, </span>
                <br className="visible@m" />
                Front-end developer
              </Text>
            </div>
          </div>
          <Text className="Footer-bottom" size="s">
            &copy; {new Date().getFullYear()} Joonas Sandell
            <Link className="Footer-mut" href={getLink('source', 'common').url}>
              {getLink('source', 'common').title}
            </Link>
          </Text>
        </div>
      </div>
    </footer>
  );
};
