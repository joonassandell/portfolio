import { type HeaderProps } from '@/components/Header';
import { type TemplateProps } from '@/components/Template';

/* =======================================
 * Sitemap, links
 * ======================================= */

export interface SitemapItem {
  hidden?: boolean;
  id: string;
  images?: string;
  navTitle: string;
  themeColor?: string;
  title: string;
  url: URL['href'];
}

export interface SitemapItemProject extends SitemapItem {
  color: string;
  year: string | number;
}

export interface Sitemap {
  common: SitemapItem[];
  project: SitemapItemProject[];
}

export interface Link {
  id: string;
  title: string;
  url: URL['href'];
}

export interface Links {
  common: Link[];
  social: Link[];
}

/* =======================================
 * Page
 * ======================================= */

export interface PageProps {
  id: TemplateProps['id'];
  images?: Image[];
  themeColor?: string;
  title: string;
}

export interface PageProjectProps extends PageProps {
  navTitle: HeaderProps['navTitle'];
  year: string | number;
}

/* =======================================
 * Images
 * ======================================= */

export interface Image {
  height?: number;
  src: string;
  width?: number;
}
