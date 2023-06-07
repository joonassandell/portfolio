import { links } from '@/lib/config';
import { LinkRoll } from '@/components/LinkRoll';

const someLinks = links.social;

export const Footer = () => {
  return (
    <footer className="Footer wrap">
      <div className="Footer-inner">
        <div className="Footer-main">
          <ul className="Footer-links Footer-links--mobile">
            {someLinks.map(link => {
              return (
                <li className="Footer-links-item" key={link.id}>
                  <LinkRoll href={link.url}>{link.title}</LinkRoll>
                </li>
              );
            })}
          </ul>
          <p className="Footer-copyright">
            &copy; {new Date().getFullYear()}
            <br />
            Joonas Sandell
          </p>
        </div>
      </div>
    </footer>
  );
};
