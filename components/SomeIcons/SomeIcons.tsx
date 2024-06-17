import {
  Dribbble,
  Github,
  Instagram,
  LinkedIn,
  SoundCloud,
  X,
} from '@/components/Icon';
import { type SomeIconsProps } from './';
import { Link } from '@/components/Link';
import c from 'clsx';
import { LINKS } from '@/lib/config';

export const SomeIcons = ({ className, ...props }: SomeIconsProps) => {
  const classes = c('SomeIcons', className);

  return (
    <div className={classes} {...props}>
      {LINKS.social.map(({ id, url, title }) => {
        return (
          <Link
            className="SomeIcons-link"
            key={id}
            href={url}
            underline={false}
          >
            {id === 'twitter' && <X size="s" aria-hidden />}
            {id === 'soundcloud' && <SoundCloud size="m" />}
            {id === 'instagram' && <Instagram size="m" />}
            {id === 'linkedin' && <LinkedIn size="s" />}
            {id === 'github' && <Github size="m" />}
            {id === 'dribbble' && <Dribbble size="m" />}
            <span className="hideVisually">{title}</span>
          </Link>
        );
      })}
    </div>
  );
};
