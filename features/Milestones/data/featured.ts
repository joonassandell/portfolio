import { type Category, CATEGORY_NAME, type Milestone } from '../';
import { type Optional } from '@/types';

const data: Optional<Milestone, 'category' | 'categoryName'>[] = [
  {
    date: '2024-09-05',
    event: 'Featured in Lost Miracle Radio Show 73 by Sébastien Léger',
    url: 'https://soundcloud.com/sebastienleger/lost-miracle-radio-073',
  },
  {
    date: '2023-09-01',
    event: 'Featured in Muzli',
    url: 'https://search.muz.li/YmNiNjExZWE3',
  },
  {
    date: '2023-08-09',
    event: 'Featured in Tympanus Codrops',
    url: 'https://tympanus.net/codrops/2023/08/09/inspirational-websites-roundup-48',
  },
  {
    date: '2023-08-01',
    event: 'Featured in Land Book',
    url: 'https://land-book.com/websites/49232-joonas-sandell-designer-and-developer',
  },
  {
    date: '2023-07-26',
    event: 'Featured in Lapa',
    url: 'https://www.lapa.ninja/post/joonassandell',
  },
  {
    date: '2023-07-20',
    event: 'Featured in UX Collective',
    url: 'https://bootcamp.uxdesign.cc/5-best-design-portfolios-and-what-i-learned-from-them-week-3-4a16817df4ad',
  },
  {
    date: '2023-03-01',
    event: 'Featured in Lost Miracle Radio Show 55 by Sébastien Léger',
    url: 'https://soundcloud.com/sebastienleger/lost-miracle-radio-055',
  },
  {
    date: '2021-01-23',
    event: 'Featured in Mixmag Adria',
    url: 'https://mixmagadria.com/read/my-top-3-essentials-miss-monique-glazba',
  },
  {
    date: '2020-09-08',
    event: 'Featured in JOOF Radio 010 by John 00 Fleming',
    url: 'https://soundcloud.com/john00fleming/john-00-fleming-joof-radio-010-guest-subzero-uk',
  },
  {
    date: '2020-08-13',
    event: 'Featured in Anjunadeep Edition 315 with Asch Pintura',
    url: 'https://soundcloud.com/anjunadeep/the-anjunadeep-edition-315-with-asch-pintura',
  },
  {
    date: '2020-08-31',
    event: 'Featured in MiMo weekly Podcast by Miss Monique',
    url: 'https://www.instagram.com/p/CEjADWMgJF4',
  },
  {
    date: '2020-07-25',
    event: 'Featured in ASOT by Armin Van Buuren',
    highlight: true,
    url: 'https://www.instagram.com/p/CDD-lxPgQmv',
  },
  {
    date: '2019-04-05',
    event: 'Featured in Group Therapy 325 by Above & Beyond and Kristian Nairn',
    url: 'https://soundcloud.com/aboveandbeyond/group-therapy-325-with-above',
  },
];

export const FEATURED: Milestone[] = data.map(m => ({
  ...m,
  category: 'featured' as Category,
  categoryName: m?.categoryName ?? CATEGORY_NAME.featured,
}));
