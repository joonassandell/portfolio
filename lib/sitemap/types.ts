import { type AppHeadProps } from '@/components/App';
import { type SITEMAP } from '@/lib/sitemap';
import { type WithoutArrayKeys } from '@/types';

export interface SitemapItem<Id = WithId> {
  id: Id;
  imagesPath?: `./public/${string}/*.${string}`;
  meta: {
    description?: string;
    themeColor?: AppHeadProps['themeColor'];
    title: string | undefined;
  };
  title: string;
  url: `/${URL['href']}`;
  visible?: {
    headerNav?: boolean;
  };
}

export interface SitemapItemWork<Id = WithId> extends SitemapItem<Id> {
  color: string;
  year: string | number;
}

export type SitemapWithoutArrayKeys = keyof WithoutArrayKeys<typeof SITEMAP>;

type WithId<Id extends string = ''> = {
  id: Id;
};
