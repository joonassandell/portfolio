import { LinkRoll } from '@/components/LinkRoll';
import { LINKS } from '@/lib/config';

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
            Joonas Sandell
          </p>
        </div>
      </div>
    </footer>
  );
};
