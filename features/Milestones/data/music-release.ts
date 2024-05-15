import { type Category, type Milestone } from '../';
import { type Optional } from '@/types';

export const MUSIC_RELEASE: Milestone[] = (
  [
    {
      date: '2023-02-24',
      event: 'Released Time [Univack]',
      url: 'https://soundcloud.com/univackrecords/mode-apart-gulf-of-bothnia-extended-mix-univack',
    },
    {
      date: '2023-02-24',
      event: 'Released Gulf Of Bothnia [Univack]',
      url: 'https://soundcloud.com/univackrecords/mode-apart-gulf-of-bothnia-extended-mix-univack',
    },
    {
      date: '2020-11-23',
      event: 'Released Voyage [Manual Music]',
      url: 'https://soundcloud.com/dancefloorromancer/premiere-audioglider-last-of-the-epicureans-mode-apart-remix',
    },
    {
      date: '2020-08-14',
      event: 'Released Voyage [Perspectives Digital]',
      url: 'https://soundcloud.com/proton/premiere-mode-apart-voyage-perspectives-digital',
    },
    {
      date: '2020-08-14',
      event: 'Released Ohana [Perspectives Digital]',
      url: 'https://soundcloud.com/melodicdeep/premiere-mode-apart-ohana-original-mix-perspectives-digital',
    },
    {
      date: '2020-07-24',
      event: 'Released Armat - Gulo (Mode apart Remix) [Kitchen Recordings]',
      url: 'https://soundcloud.com/kitchen-record-label/armat-feat-kamo-seyranyan-seda-seyranyan-gulo-mode-apart-remix',
    },
    {
      date: '2020-06-08',
      event: 'Released Vort [Manual Music]',
      url: 'https://soundcloud.com/manual-music/premiere-mode-apart-vort',
    },
    {
      date: '2020-06-08',
      event: 'Released Shapes [Manual Music]',
      url: 'https://soundcloud.com/manual-music/premiere-mode-apart-shapes',
    },
    {
      categoryName: 'Unofficial Music release (Mode Apart)',
      date: '2019-01-01',
      event: 'Released Stan Kolev - Ananda (Mode Apart Remix)',
      url: 'https://soundcloud.com/dancefloorromancer/free-download-stan-kolev-ananda-mode-apart-remix',
    },
    {
      date: '2019-11-11',
      event: 'Released Ghamish [Manual Music]',
      url: 'https://soundcloud.com/manual-music/premiere-mode-apart-ghamish',
    },
    {
      date: '2019-11-05',
      event: 'Released Kashuni [Univack]',
      url: 'https://soundcloud.com/likethatunderground/premiere-mode-apart-kashuni-original-mix-yomo-records',
    },
    {
      date: '2019-10-18',
      event: 'Released Defiance [Perspectives Digital]',
      url: 'https://soundcloud.com/dancefloorromancer/premiere-mode-apart-defiance-perspectives-digital',
    },
    {
      date: '2019-10-14',
      event: 'Released Orisha [Freegrant Music]',
      url: 'https://soundcloud.com/modeapart/orisha-preview',
    },
    {
      date: '2019-09-30',
      event: 'Released Walk With Me EP [Natura Viva]',
      url: 'https://soundcloud.com/modeapart/sets/walk-with-me',
    },
    {
      date: '2019-06-10',
      event:
        'Released Framerwerk - Haryana (Mode Apart Remix) [Capital Heaven]',
      url: 'https://soundcloud.com/modeapart/framewerk-haryana-mode-apart-remix-preview',
    },
    {
      date: '2019-03-25',
      event: 'Released Desert Memories [Capital Heaven]',
      url: 'https://soundcloud.com/modeapart/desert-memories-preview',
    },
    {
      date: '2019-03-25',
      event: 'Released Days [Capital Heaven]',
      url: 'https://soundcloud.com/modeapart/days-preview',
    },
    {
      date: '2019-03-25',
      event: 'Released Days [Capital Heaven]',
      url: 'https://soundcloud.com/modeapart/days-preview',
    },
    {
      categoryName: 'Unofficial Music release (Jontey)',
      date: '2010-04-10',
      event: 'Released No Matter [Liquicity]',
      url: 'https://www.youtube.com/watch?v=zkzLjVa44U0',
    },
    {
      categoryName: 'Music release (Jontey)',
      date: '01-01-2007',
      event: 'Released Starbright [Midnight Sun Recordings]',
      url: 'https://www.discogs.com/release/1040999-Various-Midnight-Rollers-EP',
    },
  ] as Optional<Milestone, 'category' | 'categoryName'>[]
).map(event => ({
  ...event,
  category: 'music-release' as Category,
  categoryName: event?.categoryName ?? 'Music release (Mode Apart)',
}));
