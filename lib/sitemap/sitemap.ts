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
const projects = [home, uiLab, milestones, sandbox];
const work = [biocode, oras, mediasignal, moreWork];
const all = [...me, ...projects, ...work, archive];

const header = {
  nav: [about, uiLab, milestones, contact],
  navMask: [biocode, oras, mediasignal, moreWork, sandbox],
  navMaskFooter: [home, about, uiLab, milestones, resume, approach, contact],
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
  url: 'https://github.com/joonassandell/portfolio',
};

const readDotCv = {
  title: 'Read.cv',
  url: 'https://read.cv/joonassandell',
};

export const LINK = {
  dribbble,
  github,
  instagram,
  linkedIn,
  readDotCv,
  social: [
    twitter,
    github,
    linkedIn,
    dribbble,
    readDotCv,
    instagram,
    soundcloud,
  ],
  soundcloud,
  source,
  twitter,
} as const;
