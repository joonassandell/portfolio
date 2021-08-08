import { links } from '@/lib/config';
import LinkRoll from '@/components/LinkRoll';

const someLinks = links.social;

const Footer = () => {
  return (
    <footer className="Footer wrap">
      <div className="Footer-inner">
        <ul className="Footer-links Footer-links--mobile">
          {someLinks.map(link => {
            return (
              <li className="Footer-links-item" key={link.id}>
                <LinkRoll href={link.url} underline>
                  {link.title}
                </LinkRoll>
              </li>
            );
          })}
        </ul>
        <p className="Footer-copyright">
          &copy; {new Date().getFullYear()}
          <br />
          Joonas Sandell
          <br />
          {/* Built with <LinkRoll href="https://nextjs.org">
            Next.js
          </LinkRoll> &{' '}
          <LinkRoll href="https://github.com/joonassandell/rebirth">
            Rebirth
          </LinkRoll> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
