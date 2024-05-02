import { PropsWithChildren } from 'react';

export interface HeadProps extends PropsWithChildren {
  title?: string;
  description?: string;
  themeColor?: string;
}
