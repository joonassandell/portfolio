import { type Category } from './';

export const CATEGORY_COLOR: {
  [key in Category]: string;
} = {
  achievement: 'var(--slate-600)',
  career: 'var(--accent-2)',
  'feature-release': 'var(--accent-3)',
  featured: 'var(--slate-400)',
  'music-release': 'var(--slate-300)',
  project: 'var(--accent-1)',
};

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const CATEGORY_NAME: {
  [key in Category]: string;
} = {
  career: 'Career update',
  project: 'Project launch',
  'feature-release': 'Feature release',
  achievement: 'Achievement',
  featured: 'Featured',
  'music-release': 'Music release',
};

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const CATEGORY_NAME_SHORT: {
  [key in Category]: string;
} = {
  career: 'Career',
  project: 'Launch',
  'feature-release': 'Feature',
  achievement: 'Achievement',
  featured: 'Featured',
  'music-release': 'Music',
};
