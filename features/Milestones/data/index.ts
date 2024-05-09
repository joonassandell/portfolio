import { MILESTONES_CAREER } from './career';
import { MILESTONES_FEATURE_RELEASE } from './feature-release';
import { MILESTONES_FEATURED } from './featured';
import { MILESTONES_PROJECT } from './project';

export const MILESTONES = [
  ...MILESTONES_PROJECT,
  ...MILESTONES_CAREER,
  ...MILESTONES_FEATURE_RELEASE,
  ...MILESTONES_FEATURED,
];
