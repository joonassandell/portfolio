import { BUILD_DATE, GIT_COMMIT_SHA } from '@/lib/config';
import { EXTERNAL_LINKS, SITEMAP } from '@/lib/sitemap';
import { type FooterProps } from './';
import { formatDate, getLink, getSitemap } from '@/lib/utils';
import { Link } from '@/components/Link';
import { LinkRoll, type LinkRollProps } from '@/components/LinkRoll';
import { SomeIcons } from '@/components/SomeIcons';
import { Text } from '@/components/Text';
import { useUrlState } from '@/lib/useUrlState';
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
                          <FooterLink href={item.url}>{item.title}</FooterLink>
                        </li>
                      );
                    })}
                  </Text>
                </div>
                <div className="grid-col grid-col:5 grid-col:4@s">
                  <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                    Work
                  </Text>
                  <Text tag="ul">
                    {SITEMAP.work
                      .filter(item => !item.hidden?.footerNav)
                      .map(item => {
                        return (
                          <li key={item.id}>
                            <FooterLink href={item.url}>
                              {item.title}
                            </FooterLink>
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
                    {EXTERNAL_LINKS.social.map(item => {
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
                <FooterLink href={getSitemap('home', 'common').url}>
                  Joonas Sandell
                </FooterLink>
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
            <p className="mb:0">
              &copy; {new Date().getFullYear()} Joonas Sandell
              <span className="color:mute:blend visible@s">
                {' '}
                ✳︎ Last updated:{' '}
                <Link
                  className="color:mute:blend"
                  href={
                    GIT_COMMIT_SHA
                      ? `${getLink('source', 'common').url}/commit/${GIT_COMMIT_SHA}`
                      : `${getLink('source', 'common').url}/commits`
                  }
                >
                  {formatDate(BUILD_DATE)}
                </Link>
              </span>
            </p>
            <Link href={getLink('source', 'common').url}>
              {getLink('source', 'common').title}
            </Link>
          </Text>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ children, ...props }: LinkRollProps) => {
  const { active } = useUrlState(props.href);

  return (
    <LinkRoll underline={active} {...props}>
      {children}
    </LinkRoll>
  );
};
