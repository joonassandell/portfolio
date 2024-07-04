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
