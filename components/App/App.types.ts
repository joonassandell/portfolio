import { type Dispatch, type SetStateAction } from 'react';
import type { AppProps as NextAppProps } from 'next/app';

export interface AppProps extends Omit<NextAppProps, 'router'> {}

export interface AppContextProps {
  detect: {
    [key: string]: boolean;
  };
  html: Document['documentElement'];
  loading: boolean;
  loadingEnd: boolean;
  setThemeColor: Dispatch<SetStateAction<AppHeadProps['themeColor']>>;
  setTransition: (value: AppContextProps['transition']) => void;
  setTransitionInitial: (value: AppContextProps['transitionInitial']) => void;
  transition: boolean | 'template';
  transitionInitial: boolean;
}

export interface AppHeadProps {
  themeColor?: `#${string}` | undefined;
}
