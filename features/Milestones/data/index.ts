import { MILESTONES_CAREER } from './career';
import { MILESTONES_FEATURE_RELEASE } from './feature-release';
import { MILESTONES_FEATURED } from './featured';
import { MILESTONES_MUSIC_RELEASE } from './music-release';
import { MILESTONES_PROJECT } from './project';
import { MILESTONES_VARIOUS } from './various';

export const MILESTONES = [
  ...MILESTONES_PROJECT,
  ...MILESTONES_CAREER,
  ...MILESTONES_FEATURE_RELEASE,
  ...MILESTONES_FEATURED,
  ...MILESTONES_MUSIC_RELEASE,
  ...MILESTONES_VARIOUS,
];
