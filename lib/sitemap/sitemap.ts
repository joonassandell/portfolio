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

const me = [about, resume, approach, contact];
const projects = [home, uiLab, milestones];
const work = [biocode, oras, mediasignal, sandbox, moreWork, archive];
const all = [...me, ...projects, ...work];

const header = {
  nav: [about, uiLab, milestones, contact],
  navMask: [biocode, oras, mediasignal, sandbox, moreWork],
  navMaskFooter: [...me, ...projects],
  navMaskMobile: [about, uiLab, milestones, resume, approach, contact],
};

export const SITEMAP = {
  about,
  all,
  approach,
  archive,
  biocode,
  contact,
  header,
  home,
  me,
  mediasignal,
  milestones,
  moreWork,
  oras,
  projects,
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

export const LINK = {
  dribbble,
  github,
  instagram,
  linkedIn,
  social: [twitter, github, linkedIn, dribbble, instagram, soundcloud],
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
  meta: {
    appName: 'Joonas Sandell',
    description:
      'Portfolio of Joonas Sandell, UI/UX designer and creative front-end developer based in Helsinki, Finland.',
    favIcon: '/static/favicon.svg?v=2',
    favIconIco: '/static/favicon.ico?v=2',
    ogImage: `${APP_URL}/static/og-image.jpg?v=3`,
    title: 'Joonas Sandell — Designer & Developer',
    titlePrefix: 'Joonas Sandell',
    touchIcon: '/static/apple-touch-icon.png?v=2',
  },
  person: {
    email: 'me@joonassandell.com',
    location: 'Helsinki, Finland',
    name: 'Joonas Sandell',
    nickname: 'joonassandell',
    thumbnail: `${APP_URL}/images/joonassandell-thumbnail.jpg`,
    title: {
      combined: 'UI/UX designer and Front-end developer',
      design: 'UI/UX designer',
      developer: 'Front-end developer',
      simple: 'Designer & Developer',
    },
    twitter: '@joonassandell',
    url: 'https://joonassandell.com',
  },
} as const;
