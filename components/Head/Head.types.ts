import { type PropsWithChildren } from 'react';

export interface HeadProps extends PropsWithChildren {
  description?: string;
  ogImage?: `/${string}`;
  title?: string;
}
