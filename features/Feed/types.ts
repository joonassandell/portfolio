import { type ComponentPropsWithoutRef } from 'react'
import { type DateString, type Optional, type Required } from '@/types'
import { type FigureProps } from '@/components/Figure'

export type Category = 'freepress'

export interface FeedDataItemProps {
  category: Category
  categoryName: string
  col?: 2
  date: DateString
  image: Required<Optional<FigureProps, 'alt'>, 'heading'>
}

export interface PageProps {
  data: FeedDataItemProps[]
}

export interface FeedItemProps
  extends ComponentPropsWithoutRef<'div'>,
    FeedDataItemProps {}
