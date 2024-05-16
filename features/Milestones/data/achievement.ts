import { type Milestone } from '..';
import { type Optional } from '@/types';

const data: Optional<Milestone, 'category' | 'categoryName'>[] = [
  {
    categoryName: 'Music achievement',
    date: '2024-04-01',
    event: 'Reached 700k listens on Voyage on Spotify',
    highlight: true,
    url: 'https://open.spotify.com/artist/72bPxMUh9x57Nmvm2CqXal',
  },
  {
    categoryName: 'Music achievement',
    date: '2024-03-01',
    event: 'Reached 175k listens on Orisha on Spotify',
    url: 'https://open.spotify.com/track/2xQKZGHedY29bugRkY1TgS',
  },
  {
    categoryName: 'Music achievement',
    date: '2024-02-01',
    event: 'Reached 80k listens on Ghamish on Spotify',
    url: 'https://open.spotify.com/track/6HmYb783SQgK8GcxiolBsY',
  },
  {
    categoryName: 'Music achievement',
    date: '2024-01-01',
    event: 'Hit 200k listens / downloads on Ananda Remix',
    url: 'https://soundcloud.com/dancefloorromancer/free-download-stan-kolev-ananda-mode-apart-remix',
  },
  {
    date: '2023-07-18',
    event: 'Won Honorable mention with Joonas Sandell Portfolio',
    url: 'https://www.awwwards.com/sites/joonas-sandell-portfolio',
  },
  {
    categoryName: 'Music achievement',
    date: '2020-10-27',
    event:
      'Reached #1 spot on Beatport Progressive House Chart and Top 20 main chart',
    highlight: true,
    url: 'https://www.instagram.com/p/CG2aCfpANNF',
  },
  {
    date: '2013-04-17',
    event: 'Won Honorable mention with Pala taivasta website',
    url: 'https://www.awwwards.com/sites/the-piece-of-heaven',
  },
  {
    date: '2013-02-06',
    event: 'Won Honorable mention with Moominvalley website',
    url: 'https://www.awwwards.com/sites/moominvalley',
  },
  {
    date: '2011-11-03',
    event: 'Won Honorable mention with Fullsize website',
    url: 'https://www.awwwards.com/sites/fullsize',
  },
  {
    categoryName: 'Music achievement',
    date: '2010-01-01',
    event: 'Reached 140k listens on No Matter on Youtube',
    url: 'https://www.youtube.com/watch?v=zkzLjVa44U0',
  },
];

export const ACHIEVEMENT: Milestone[] = data.map(e => ({
  ...e,
  category: 'achievement',
  categoryName: e.categoryName ?? 'Project achievement',
}));
