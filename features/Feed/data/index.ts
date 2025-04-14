import { FREEPRESS } from './freepress'

export const FEED = [...FREEPRESS]

export const FEED_SORTED = [...FREEPRESS].sort(
  (a, b) => new Date(b?.date).valueOf() - new Date(a?.date).valueOf(),
)
