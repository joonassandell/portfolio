import { CATEGORY_NAME, type FeedDataItemProps } from '../'
import { type Optional } from '@/types'

const data: Optional<FeedDataItemProps, 'category' | 'categoryName'>[] = [
  {
    date: '2025-02-04',
    image: {
      heading: 'Freepress wordmark',
      src: 'joonassandell-freepress-wordmark.png',
    },
  },
  {
    col: 2,
    date: '2025-02-10',
    image: {
      heading: 'Freepress brand guidelines',
      src: '/feed/joonassandell-freepress-brand-guidelines.mp4',
    },
  },
  {
    date: '2025-04-11',
    image: {
      heading: 'Initial Freepress mobile app',
      src: 'joonassandell-freepress-mobile-app-home.png',
    },
  },
  {
    date: '2025-04-08',
    image: {
      heading: 'Initial Freepress sidebar',
      src: 'joonassandell-freepress-desktop-sidebar-home.png',
    },
  },
  {
    date: '2025-02-04',
    image: {
      heading: 'Freepress icon',
      src: 'joonassandell-freepress-icon.png',
    },
  },
  {
    date: '2025-04-10',
    image: {
      heading: 'Freepress Design System thumbnail',
      src: 'joonassandell-freepress-design-system-thumbnail.png',
    },
  },
  {
    col: 2,
    date: '2025-02-10',
    image: {
      heading: 'Freepress evolution chart',
      src: 'joonassandell-freepress-evolution.png',
    },
  },
]

export const FREEPRESS: FeedDataItemProps[] = data.map(e => ({
  ...e,
  category: 'freepress',
  categoryName: CATEGORY_NAME.freepress,
}))
