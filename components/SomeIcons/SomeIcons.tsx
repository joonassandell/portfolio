import {
  Dribbble,
  Github,
  Instagram,
  LinkedIn,
  SoundCloud,
  X,
} from '@/components/Icon';
import { EXTERNAL_LINKS } from '@/lib/sitemap';
import { Link } from '@/components/Link';
import { type SomeIconsProps } from './';
import c from 'clsx';

export const SomeIcons = ({ className, ...props }: SomeIconsProps) => {
  const classes = c('SomeIcons', className);

  return (
    <div className={classes} {...props}>
      {EXTERNAL_LINKS.social.map(({ title, url }) => {
        return (
          <Link
            className="SomeIcons-link"
            href={url}
            key={title}
            underline={false}
          >
            {title === 'Twitter' && <X aria-hidden />}
            {title === 'SoundCloud' && <SoundCloud aria-hidden />}
            {title === 'Instagram' && <Instagram aria-hidden />}
            {title === 'LinkedIn' && <LinkedIn aria-hidden />}
            {title === 'Github' && <Github aria-hidden />}
            {title === 'Dribbble' && <Dribbble aria-hidden />}
            <span className="hideVisually">{title}</span>
          </Link>
        );
      })}
    </div>
  );
};
