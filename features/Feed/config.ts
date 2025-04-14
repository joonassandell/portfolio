import { type Category } from './'

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const CATEGORY_NAME: {
  [key in Category]: string
} = {
  freepress: 'Freepress',
} as const
