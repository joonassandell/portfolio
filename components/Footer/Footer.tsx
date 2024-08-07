import { BUILD_DATE, GIT_COMMIT_SHA } from '@/lib/config';
import { CONTENT, LINK, SITEMAP } from '@/lib/sitemap';
import { type FooterProps } from './';
import { formatDate } from '@/lib/utils';
import { Link } from '@/components/Link';
import { LinkRoll } from '@/components/LinkRoll';
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
                    {SITEMAP.me.map(item => {
                      return (
                        <li key={item.id}>
                          <LinkRoll href={item.url} underline="active">
                            {item.title}
                          </LinkRoll>
                        </li>
                      );
                    })}
                  </Text>
                </div>
                <div className="grid-col grid-col:5 grid-col:4@s">
                  <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                    Projects
                  </Text>
                  <Text tag="ul">
                    {SITEMAP.projects.map(item => {
                      return (
                        <li key={item.id}>
                          <LinkRoll href={item.url} underline="active">
                            {item.title}
                          </LinkRoll>
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
                    {LINK.social.map(item => {
                      return (
                        <li key={item.title}>
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
                <LinkRoll href={SITEMAP.home.url} underline="active">
                  {CONTENT.person.name}
                </LinkRoll>
              </Text>
              <Text className="mb:m" color="mute:blend" size="s" tag="p">
                {CONTENT.person.title.design}
                <span className="hidden@m">, </span>
                <br className="visible@m" />
                {CONTENT.person.title.developer}
              </Text>
            </div>
          </div>
          <Text className="Footer-bottom" size="s">
            <p className="Footer-bottom-updated mb:0">
              © {new Date().getFullYear()} {CONTENT.person.name}
              <span className="color:mute:blend visible@s">
                {' '}
                ✳︎ Last updated:{' '}
                <Link
                  href={
                    GIT_COMMIT_SHA
                      ? `${LINK.source.url}/commit/${GIT_COMMIT_SHA}`
                      : `${LINK.source.url}/commits`
                  }
                >
                  {formatDate(BUILD_DATE)}
                </Link>
              </span>
            </p>
            <Link href={LINK.source.url}>{LINK.source.title}</Link>
          </Text>
        </div>
      </div>
    </footer>
  );
};
