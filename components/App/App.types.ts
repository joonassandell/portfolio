import type { AppProps as NextAppProps } from 'next/app';

export interface AppProps extends Omit<NextAppProps, 'router'> {}

export interface AppContextProps {
  detect: {
    [key: string]: boolean;
  };
  html: Document['documentElement'];
  loading: boolean;
  loadingEnd: boolean;
  setLoadingEnd: (value: AppContextProps['loadingEnd']) => void;
  setTransition: (value: AppContextProps['transition']) => void;
  setTransitionInitial: (value: AppContextProps['transitionInitial']) => void;
  transition: boolean | 'template';
  transitionInitial: boolean;
}
