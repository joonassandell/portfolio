import {
  type Entries,
  type Image,
  type Link,
  type Links,
  type Sitemap,
  type SitemapItem,
  type SitemapItemProject,
} from '@/types';
import { LINKS, SITEMAP } from '@/lib/config';

export const getSitemap = (value: string, type: keyof Sitemap = 'project') => {
  return SITEMAP[type].find(obj => obj['id'] === value) as SitemapItem &
    SitemapItemProject;
};

export const getLink = (value: string, type: keyof Links = 'social'): Link => {
  return LINKS[type].find(obj => obj['id'] === value) as Link;
};

export const getImage = (image: Image['src'], images?: Image[]) =>
  images?.find(img => {
    const splitSrc = img.src.split('.');
    const fileName = splitSrc[0].split('/').pop();
    return image === fileName;
  }) as Image;

export const getCSSVarValue = (prop: string) => {
  if (prop[0] != '-') prop = `--${prop}`;

  if (!isServer) {
    const value = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`${prop.trim()}`);
    return value.trim();
  }
};

export const isServer = typeof window === 'undefined';

export const isBrowser = !isServer;

export const isBoolean = (value: any): value is boolean =>
  typeof value === 'boolean';

export const isString = (value: any): value is string =>
  typeof value === 'string';

export const isEmptyString = (value: string) => value.trim() === '';

export const getDistMetric = (x: number, y: number, x2: number, y2: number) => {
  const xDiff = x - x2;
  const yDiff = y - y2;
  return xDiff * xDiff + yDiff * yDiff;
};

export const getClosestEdge = (x: number, y: number, w: number, h: number) => {
  const topEdgeDist = getDistMetric(x, y, w / 2, 0);
  const bottomEdgeDist = getDistMetric(x, y, w / 2, h);
  const min = Math.min(topEdgeDist, bottomEdgeDist);
  return min === topEdgeDist ? 'top' : 'bottom';
};

/**
 * Map number x from range [a, b] to [c, d]
 */
export const mapRange = (
  x: number,
  a: number,
  b: number,
  c: number,
  d: number,
) => ((x - a) * (d - c)) / (b - a) + c;

export const objectEntries = <T extends object>(object: T): Entries<T> => {
  return Object.entries(object) as Entries<T>;
};

export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
};

export const getMilliSeconds = (number: number) => number * 1000;
