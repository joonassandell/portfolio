import { getLink } from '@/lib/utils';
import { Link } from '@/components/Link';
import { LinkRoll } from '@/components/LinkRoll';
import { LINKS } from '@/lib/config';

const source = getLink('source', 'common');

export const Footer = () => {
  return (
    <footer className="Footer wrap">
      <div className="Footer-inner">
        <div className="Footer-main">
          <ul className="Footer-links">
            {LINKS.social.map(item => {
              return (
                <li key={item.id}>
                  <LinkRoll href={item.url}>{item.title}</LinkRoll>
                </li>
              );
            })}
          </ul>
          <p className="Footer-copyright">
            &copy; {new Date().getFullYear()} <br />
            Joonas Sandell <br />
            <Link href={`${source.url}`}>{source.title}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
