import { type PropsWithChildren } from 'react';

export interface DelayedRenderProps extends PropsWithChildren {
  delay?: number;
}
