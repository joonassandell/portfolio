import { LINKS } from '@/lib/config';
import { LinkRoll } from '@/components/LinkRoll';

export const Footer = () => {
  const someLinks = LINKS.social;

  return (
    <footer className="Footer wrap">
      <div className="Footer-inner">
        <div className="Footer-main">
          <ul className="Footer-links">
            {someLinks.map(item => {
              return (
                <li key={item.id}>
                  <LinkRoll href={item.url}>{item.title}</LinkRoll>
                </li>
              );
            })}
          </ul>
          <p className="Footer-copyright">
            &copy; {new Date().getFullYear()} <br />
            Joonas Sandell
          </p>
        </div>
      </div>
    </footer>
  );
};
