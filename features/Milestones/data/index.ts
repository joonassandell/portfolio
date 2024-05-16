import { ACHIEVEMENT } from './achievement';
import { CAREER } from './career';
import { FEATURE_RELEASE } from './feature-release';
import { FEATURED } from './featured';
import { MUSIC_RELEASE } from './music-release';
import { PROJECT } from './project';

export const MILESTONES = [
  ...PROJECT,
  ...CAREER,
  ...FEATURE_RELEASE,
  ...FEATURED,
  ...MUSIC_RELEASE,
  ...ACHIEVEMENT,
];
