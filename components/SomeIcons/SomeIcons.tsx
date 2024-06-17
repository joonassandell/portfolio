import {
  Dribbble,
  Github,
  Instagram,
  LinkedIn,
  SoundCloud,
  X,
} from '@/components/Icon';
import { Link } from '@/components/Link';
import { LINKS } from '@/lib/config';
import { type SomeIconsProps } from './';
import c from 'clsx';

export const SomeIcons = ({ className, ...props }: SomeIconsProps) => {
  const classes = c('SomeIcons', className);

  return (
    <div className={classes} {...props}>
      {LINKS.social.map(({ id, title, url }) => {
        return (
          <Link
            className="SomeIcons-link"
            href={url}
            key={id}
            underline={false}
          >
            {id === 'twitter' && <X aria-hidden />}
            {id === 'soundcloud' && <SoundCloud aria-hidden />}
            {id === 'instagram' && <Instagram aria-hidden />}
            {id === 'linkedin' && <LinkedIn aria-hidden />}
            {id === 'github' && <Github aria-hidden />}
            {id === 'dribbble' && <Dribbble aria-hidden />}
            <span className="hideVisually">{title}</span>
          </Link>
        );
      })}
    </div>
  );
};
