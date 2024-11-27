import { type Category, CATEGORY_NAME, type Milestone } from '../'
import { type Optional } from '@/types'

const data: Optional<Milestone, 'category' | 'categoryName'>[] = [
  {
    date: '2025-01-01',
    event: 'Joined Freepress as Senior Product Designer',
    highlight: true,
    url: 'https://freepress.ai',
  },
  {
    date: '2020-11-16',
    event: 'Joined Biocode as Senior product designer and Front-end developer',
    url: 'https://biocode.io/about',
  },
  {
    date: '2014-09-01',
    event:
      'Joined Mediasignal as Art director, UI/UX designer and Front-end developer',
    url: 'https://mediasignal.fi',
  },
  {
    date: '2013-01-31',
    event: 'Completed degree in Audiovisual communications',
  },
  {
    date: '2010-01-01',
    event: 'Started my own design agency',
  },
  {
    date: '2010-04-01',
    event: 'Joined Vapriikki as UI/UX designer and Front-end developer',
  },
  {
    date: '2007-07-01',
    event: 'Joined Tampere Music Festivals as Web/Graphic designer',
  },
  {
    date: '2005-06-04',
    event: 'Matriculation Examination',
  },
]

export const CAREER: Milestone[] = data.map(m => ({
  ...m,
  category: 'career' as Category,
  categoryName: m.categoryName ?? CATEGORY_NAME.career,
}))
