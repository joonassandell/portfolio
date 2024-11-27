import { type DateString } from '@/types'
import {
  type Point as NivoPoint,
  type PointSymbolProps as NivoPointSymbolProps,
  type PointTooltipProps as NivoPointTooltipProps,
} from '@nivo/line'
import { type TableCaptionProps } from '@/components/Table'

export type Category =
  | 'project'
  | 'career'
  | 'featured'
  | 'feature-release'
  | 'music-release'
  | 'achievement'

export interface Milestone {
  category: Category
  categoryName: string
  date: DateString
  event: string
  hidden?: boolean
  highlight?: boolean
  major?: true
  url?: string
}

export interface PointSymbolProps extends Omit<NivoPointSymbolProps, 'datum'> {
  datum: Milestone
}

export interface PointTooltipProps extends NivoPointTooltipProps {
  point: NivoPoint & { data: NivoPoint['data'] & Partial<Milestone> }
}

export interface MilestoneTableProps {
  tableCaption?: TableCaptionProps
}
