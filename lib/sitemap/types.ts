export interface SitemapItem {
  hidden?: {
    footerNav?: boolean;
  };
  id: string;
  imagesPath?: `./${string}/*.${string}`;
  meta: {
    description?: string;
    themeColor?: string;
    title: string | undefined;
  };
  title: string;
  url: `/${URL['href']}`;
  visible?: {
    headerNav?: boolean;
  };
}

export interface SitemapItemWork extends SitemapItem {
  color: string;
  year: string | number;
}

export interface ExternalLink {
  id: string;
  title: string;
  url: URL['href'];
}

export interface ExternalLinks {
  common: ExternalLink[];
  social: ExternalLink[];
}
