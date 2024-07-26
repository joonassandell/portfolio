import { APP_URL } from '../config';
import about from '@/features/About/sitemap';
import approach from '@/features/Approach/sitemap';
import archive from '@/features/Work/Archive/sitemap';
import biocode from '@/features/Work/Biocode/sitemap';
import contact from '@/features/Contact/sitemap';
import home from '@/features/Home/sitemap';
import mediasignal from '@/features/Work/Mediasignal/sitemap';
import milestones from '@/features/Milestones/sitemap';
import moreWork from '@/features/Work/MoreWork/sitemap';
import oras from '@/features/Work/Oras/sitemap';
import resume from '@/features/Resume/sitemap';
import sandbox from '@/features/Work/Sandbox/sitemap';
import uiLab from '@/features/UiLab/sitemap';

/* =======================================
 * Sitemap
 * ======================================= */

const me = [about, milestones, approach, resume, contact];
const work = [biocode, oras, mediasignal, sandbox, moreWork, archive];
const all = [...me, uiLab, ...work];

export const SITEMAP = {
  about,
  all,
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
  uiLab,
  work,
} as const;

/* =======================================
 * Links
 * ======================================= */

const twitter = {
  title: 'Twitter',
  url: 'https://x.com/joonassandell',
};

const github = {
  title: 'Github',
  url: 'https://github.com/joonassandell',
};

const linkedIn = {
  title: 'LinkedIn',
  url: 'https://www.linkedin.com/in/joonassandell',
};

const dribbble = {
  title: 'Dribbble',
  url: 'https://dribbble.com/joonassandell',
};

const instagram = {
  title: 'Instagram',
  url: 'https://www.instagram.com/mode.apart',
};

const soundcloud = {
  title: 'SoundCloud',
  url: 'https://soundcloud.com/modeapart',
};
const source = {
  title: 'View source',
  url: 'https://github.com/joonassandell/joonassandell-portfolio',
};

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const LINK = {
  social: [twitter, github, linkedIn, dribbble, instagram, soundcloud],
  dribbble,
  github,
  instagram,
  linkedIn,
  soundcloud,
  source,
  twitter,
} as const;

/* =======================================
 * Content
 * ======================================= */

export const CONTENT = {
  header: {
    defaultNavTitle: 'Selected works',
  },
  person: {
    name: 'Joonas Sandell',
    email: 'me@joonassandell.com',
    nickname: 'joonassandell',
    title: {
      simple: 'Designer & Developer',
      design: 'UI/UX designer',
      developer: 'Front-end developer',
      combined: 'UI/UX designer and Front-end developer',
    },
    url: 'https://joonassandell.com',
    thumbnail: `${APP_URL}/images/joonassandell-thumbnail.jpg`,
    twitter: '@joonassandell',
    location: 'Helsinki, Finland',
  },
  meta: {
    appName: 'Joonas Sandell',
    description:
      'Portfolio of Joonas Sandell, UI/UX designer and creative front-end developer based in Helsinki, Finland.',
    title: 'Joonas Sandell — Designer & Developer',
    titlePrefix: 'Joonas Sandell',
    ogImage: `${APP_URL}/static/og-image.jpg?v=3`,
    favIcon: '/static/favicon.svg?v=2',
    favIconIco: '/static/favicon.ico?v=2',
    touchIcon: '/static/apple-touch-icon.png?v=2',
  },
} as const;
