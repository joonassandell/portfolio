import { type HeaderProps } from '@/components/Header';

/* =======================================
 * Page
 * ======================================= */

export interface PageProps {
  images?: Image[];
  navTitle?: HeaderProps['navTitle'];
}

/* =======================================
 * Images
 * ======================================= */

export interface Image {
  height?: number;
  src: string;
  width?: number;
}
