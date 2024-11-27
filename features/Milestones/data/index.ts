import { ACHIEVEMENT } from './achievement'
import { CAREER } from './career'
import { FEATURE_RELEASE } from './feature-release'
import { FEATURED } from './featured'
import { type Milestone } from '../'
import { MUSIC_RELEASE } from './music-release'
import { PROJECT } from './project'

export const MILESTONES = [
  ...PROJECT,
  ...CAREER,
  ...FEATURE_RELEASE,
  ...FEATURED,
  ...MUSIC_RELEASE,
  ...ACHIEVEMENT,
]

export const MILESTONES_PER_YEAR = MILESTONES.reduce(
  (acc: { [year: string]: number }, curr) => {
    const year = new Date(curr.date).getFullYear()
    acc[year] = (acc[year] || 0) + 1
    return acc
  },
  {},
)

export const MILESTONES_YEARS = Object.keys(MILESTONES_PER_YEAR).reverse()

export const MILESTONES_SORTED = [...MILESTONES].sort(
  (a, b) => new Date(b?.date).valueOf() - new Date(a?.date).valueOf(),
)

export const MILESTONES_GROUPED = MILESTONES_YEARS.reduce(
  (result: { [year: string]: Milestone[] }, year) => {
    result[year] = MILESTONES_SORTED.filter(m => m.date.startsWith(year))
    return result
  },
  {},
)
