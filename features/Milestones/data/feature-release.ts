import { type Category, CATEGORY_NAME, type Milestone } from '../';
import { type Optional } from '@/types';

const data: Optional<Milestone, 'category' | 'categoryName'>[] = [
  /* =======================================
   * Portfolio
   * ======================================= */

  {
    date: '2024-05-20',
    event: 'Shipped Milestones page',
    url: 'https://x.com/joonassandell/status/1792539982311153927',
  },

  /* =======================================
   * Biocode
   * ======================================= */

  {
    categoryName: 'Feature WIP',
    date: '2024-04-20',
    event: 'Designed new Biocode application UI',
    major: true,
  },
  {
    date: '2024-01-01',
    event: 'Shipped stable Biocode Design System (BDS)',
    url: 'https://twitter.com/joonassandell/status/1733608503040741621',
  },
  {
    date: '2023-08-17',
    event: "Shipped light mode for Biocode's website",
    url: 'https://twitter.com/joonassandell/status/1733608503040741621',
  },
  {
    date: '2022-10-04',
    event: 'Shipped Biocode Carbon Footprint label',
  },
  {
    date: '2021-02-18',
    event: 'Shipped Biocode Design System MVP',
    url: 'https://github.com/biocodeio',
  },
  {
    date: '2021-07-21',
    event: 'Redesigned Valio Carbo® calculator app',
    url: 'https://www.valio.fi/uutiset/valio-ottaa-kayttoon-maitotiloille-raataloidyn-ymparistolaskurin-tavoitteena-pienentaa-paastoja-30-lla-5-vuodessa/',
  },

  /* =======================================
   * Mediasignal
   * ======================================= */

  {
    date: '2019-09-26',
    event: 'Shipped enhanced Podium web app UI',
  },
  {
    date: '2019-01-09',
    event: 'Re-engineered Dictum website faster',
  },
  {
    date: '2017-06-26',
    event: 'Shipped enhanced Ekovilla website UI',
  },
  {
    date: '2016-01-19',
    event: 'Shipped Mackays campaign for Finefoods website',
  },
  {
    date: '2015-09-12',
    event: 'Shipped enhanced SOS-Lapsikylä website',
  },
  {
    date: '2014-09-16',
    event: 'Shipped enhanced Kanto marketing page',
  },
];

export const FEATURE_RELEASE: Milestone[] = data.map(m => ({
  ...m,
  category: 'feature-release' as Category,
  categoryName: m.categoryName ?? CATEGORY_NAME['feature-release'],
}));
