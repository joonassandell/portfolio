import { getLink, getSitemap } from '@/lib/utils';
import { Link } from '@/components/Link';
import { LinkRoll } from '@/components/LinkRoll';
import { LINKS, SITEMAP } from '@/lib/config';
import { SomeIcons } from '@/components/SomeIcons';
import { Text } from '@/components/Text';

export const Footer = () => {
  return (
    <footer className="Footer wrap">
      <div className="Footer-inner">
        <div className="Footer-main">
          <div className="grid">
            <div className="grid-col grid-col:8@m">
              <div className="grid -gap:row:l">
                <div className="grid-col grid-col:5 grid-col:4@s">
                  <Text className="Footer-mute mb:xs mb@m" tag="p">
                    Me
                  </Text>
                  <ul className="Footer-list">
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
                      <LinkRoll href="/Joonas-Sandell-CV.pdf" target="_blank">
                        Resume
                      </LinkRoll>
                    </li>
                    <li>
                      <LinkRoll href={getSitemap('contact', 'common').url}>
                        {getSitemap('contact', 'common').navTitle}
                      </LinkRoll>
                    </li>
                  </ul>
                </div>
                <div className="grid-col grid-col:5 grid-col:4@s">
                  <Text className="Footer-mute mb:xs mb@m" tag="p">
                    Work
                  </Text>
                  <ul className="Footer-list">
                    {SITEMAP.project
                      .filter(item => !item.hidden && item.id != 'home')
                      .map(item => {
                        return (
                          <li key={item.id}>
                            <LinkRoll href={item.url}>{item.navTitle}</LinkRoll>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="grid-col grid-col:4@s">
                  <Text className="Footer-mute mb:xs mb@m" tag="p">
                    Socials
                  </Text>
                  <SomeIcons className="hidden@s" />
                  <ul className="Footer-list visible@s">
                    {LINKS.social.map(item => {
                      return (
                        <li key={item.id}>
                          <LinkRoll href={item.url}>{item.title}</LinkRoll>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="Footer-nameCol grid-col grid-col:4@m">
              <Text className="mb:2xs mb@m">
                <p className="hidden@m mb:0">Joonas Sandell</p>
                <Link
                  className="visible@m"
                  href={getSitemap('home', 'common').url}
                >
                  Joonas Sandell
                </Link>
              </Text>
              <Text className="mb:m" size="s">
                <p className="Footer-mute mb:0">
                  UI/UX designer
                  <span className="hidden@m">, </span>
                  <br className="visible@m" />
                  Front-end developer
                </p>
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
