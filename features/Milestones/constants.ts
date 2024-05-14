import { type Category } from './';

export const CATEGORY_COLOR: {
  [key in Category]: string;
} = {
  achievement: 'var(--accent-4)',
  career: 'var(--accent-3)',
  'feature-release': 'var(--accent-5)',
  featured: 'var(--accent-2)',
  'music-release': 'var(--accent-6)',
  project: 'var(--accent-1)',
};

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const CATEGORY_NAME: {
  [key in Category]: string;
} = {
  project: 'Project launch',
  'feature-release': 'Feature release',
  achievement: 'Achievement',
  career: 'Career update',
  featured: 'Featured',
  'music-release': 'Music release',
};

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const CATEGORY_NAME_SHORT: {
  [key in Category]: string;
} = {
  project: 'Launch',
  'feature-release': 'Feature',
  achievement: 'Achievement',
  career: 'Career',
  featured: 'Featured',
  'music-release': 'Music',
};
