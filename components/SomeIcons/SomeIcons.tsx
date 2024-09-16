import {
  Dribbble,
  Github,
  Instagram,
  LinkedIn,
  ReadDotCv,
  SoundCloud,
  X,
} from '@/components/Icon';
import { Link } from '@/components/Link';
import { LINK } from '@/lib/sitemap';
import { type SomeIconsProps } from './';
import c from 'clsx';

export const SomeIcons = ({ className, ...props }: SomeIconsProps) => (
  <div className={c('SomeIcons', className)} {...props}>
    {LINK.social.map(({ title, url }) => {
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
          {title === 'Read.cv' && <ReadDotCv aria-hidden />}
          {title === 'Dribbble' && <Dribbble aria-hidden />}
          <span className="hideVisually">{title}</span>
        </Link>
      );
    })}
  </div>
);
