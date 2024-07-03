import { type ExternalLinks } from './types';
import about from '@/features/About/sitemap';
import approach from '@/features/Approach/sitemap';
import archive from '@/features/Project/Archive/sitemap';
import biocode from '@/features/Project/Biocode/sitemap';
import contact from '@/features/Contact/sitemap';
import home from '@/features/Home/sitemap';
import mediasignal from '@/features/Project/Mediasignal/sitemap';
import milestones from '@/features/Milestones/sitemap';
import moreWork from '@/features/Project/MoreWork/sitemap';
import oras from '@/features/Project/Oras/sitemap';
import resume from '@/features/Resume/sitemap';
import sandbox from '@/features/Project/Sandbox/sitemap';

const me = [about, milestones, approach, resume, contact] as const;

const work = [
  biocode,
  oras,
  mediasignal,
  sandbox,
  moreWork,
  archive,
  home,
] as const;

export const SITEMAP = {
  about,
  all: [...me, ...work],
  approach,
  archive,
  biocode,
  contact,
  home,
  me,
  mediasignal,
  milestones,
  moreWork,
  oras,
  resume,
  sandbox,
  work,
} as const;

export const EXTERNAL_LINKS: ExternalLinks = {
  common: [
    {
      id: 'source',
      title: 'View source',
      url: 'https://github.com/joonassandell/joonassandell-portfolio',
    },
  ],
  social: [
    {
      id: 'twitter',
      title: 'Twitter',
      url: 'https://x.com/joonassandell',
    },
    {
      id: 'github',
      title: 'Github',
      url: 'https://github.com/joonassandell',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joonassandell',
    },
    {
      id: 'dribbble',
      title: 'Dribbble',
      url: 'https://dribbble.com/joonassandell',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      url: 'https://www.instagram.com/mode.apart',
    },
    {
      id: 'soundcloud',
      title: 'SoundCloud',
      url: 'https://soundcloud.com/modeapart',
    },
  ],
} as const;
