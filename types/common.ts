/* =======================================
 * Sitemap, links
 * ======================================= */

export interface SitemapItem {
  hidden?: boolean;
  id: string;
  imagesPath?: string;
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
  images?: Image[];
}

/* =======================================
 * Images
 * ======================================= */

export interface Image {
  height?: number;
  src: string;
  width?: number;
}
