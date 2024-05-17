import { type DateString } from '@/types';
import { type PointSymbolProps as NivoPointSymbolProps } from '@nivo/line';
import { type TableCaptionProps } from '@/components/Table';

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
  date: DateString;
  event: string;
  hidden?: boolean;
  highlight?: boolean;
  major?: true;
  url?: string;
}

export interface PointSymbolProps extends Omit<NivoPointSymbolProps, 'datum'> {
  datum: Milestone;
}

export interface MilestoneTableProps {
  tableCaption?: TableCaptionProps;
}
