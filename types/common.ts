import { HeaderProps } from '@/components/Header';
import { TemplateProps } from '@/components/Template';

/* =======================================
 * Sitemap, links
 * ======================================= */

export interface SitemapItem {
  id: string;
  images?: string;
  navTitle: string;
  title: string;
  themeColor?: string;
  url: URL['href'];
  hidden?: boolean;
}

export interface SitemapItemProject extends SitemapItem {
  color: string;
  year: string | number;
}

export interface Sitemap {
  primary: SitemapItemProject[];
  secondary: SitemapItem[];
}

export interface LinkItem {
  title: string;
  id: string;
  url: URL['href'];
}

export interface Links {
  social: LinkItem[];
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
  title: string;
  themeColor?: string;
  url: URL['href'];
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
