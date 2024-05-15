import { type PointSymbolProps as NivoPointSymbolProps } from '@nivo/line';

export type Category =
  | 'project'
  | 'career'
  | 'featured'
  | 'feature-release'
  | 'music-release'
  | 'achievement';

export interface Milestone {
  category: Category;
  categoryName: string;
  date: `${number}-${string}-${string}`;
  event: string;
  hidden?: boolean;
  highlight?: boolean;
  major?: true;
  url?: string;
}

export interface PointSymbolProps extends Omit<NivoPointSymbolProps, 'datum'> {
  datum: Milestone;
}
