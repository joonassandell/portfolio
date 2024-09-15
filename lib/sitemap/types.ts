import { type AppHeadProps } from '@/components/App';
import { type HeadProps } from '@/components/Head';
import { type SITEMAP } from '@/lib/sitemap';
import { type WithoutArrayKeys } from '@/types';

export interface SitemapItem<Id = WithId> {
  id: Id;
  imagesPath?: `./public/${string}/*.${string}`;
  meta: {
    description?: HeadProps['description'];
    ogImage?: HeadProps['ogImage'];
    themeColor?: AppHeadProps['themeColor'];
    title: HeadProps['title'];
  };
  title: string;
  url: `/${URL['href']}`;
}

export interface SitemapItemWork<Id = WithId> extends SitemapItem<Id> {
  color: string;
  new?: boolean;
  year: string | number;
}

export type SitemapWithoutArrayKeys = keyof WithoutArrayKeys<
  Omit<typeof SITEMAP, 'header'>
>;

type WithId<Id extends string = ''> = {
  id: Id;
};
