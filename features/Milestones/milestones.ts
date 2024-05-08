export type Category = 'project' | 'career' | 'featured';

export const MILESTONES_PROJECT = [
  {
    category: 'Project launch',
    date: '2023-07-10',
    event: 'Launched portfolio',
    url: 'https://twitter.com/joonassandell/status/1678358514350137344',
  },
  {
    category: 'Project launch',
    date: '2023-03-07',
    event: 'Launched rebranded Biocode website',
    url: '/biocode',
  },
  {
    category: 'Project launch',
    // date: '2021-08-07',
    date: '2022-01-26',
    event: 'Launched Biocode for reporting service',
    url: 'https://report.biocode.io',
  },
  {
    category: 'Project launch',
    date: '2021-02-09',
    event: 'Launched Biocode website',
    url: 'https://biocode.io/sustainable-food-production',
  },
  {
    category: 'Project launch',
    date: '2016-07-06',
    event: 'Launched Oras website',
    url: '/oras',
  },
];

export const MILESTONES_VARIOUS = [];

export const MILESTONES_FEATURE_RELEASE = [
  {
    category: 'Feature release',
    date: '2023-08-17',
    event: "Shipped light mode for Biocode's website",
    url: 'https://twitter.com/joonassandell/status/1733608503040741621',
  },
];

export const MILESTONES_FEATURED = [];

export const MILESTONES_CAREER = [
  {
    category: 'Career update',
    date: '2020-11-16',
    event: 'Joined Biocode as Lead product designer and Front-end developer',
    url: 'https://biocode.io/about',
  },
  {
    category: 'Career update',
    date: '2014-09-01',
    event:
      'Joined Mediasignal as Art director, UI/UX designer and Front-end developer',
    url: 'https://mediasignal.fi',
  },
  {
    category: 'Career update',
    date: '2010-04-01',
    event: 'Joined Vapriikki as UI/UX designer and front-end developer',
    url: 'https://mediasignal.fi',
  },
  {
    category: 'Career update',
    date: '2007-07-01',
    event: 'Joined Tampere Music Festivals as Web/Graphic designer',
    url: 'https://mediasignal.fi',
  },
];

export const MILESTONES_MUSIC = [];

export const MILESTONES = [
  ...MILESTONES_PROJECT,
  ...MILESTONES_CAREER,
  ...MILESTONES_FEATURE_RELEASE,
  ...MILESTONES_FEATURED,
];
