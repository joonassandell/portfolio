import type { AppProps as NextAppProps } from 'next/app';

export interface AppProps extends Omit<NextAppProps, 'router'> {}

export interface AppStateProps {
  detect: {
    [key: string]: boolean;
  };
  html: Document['documentElement'];
  loading: boolean;
  loadingEnd: boolean;
  transition: boolean | 'template';
  transitionInitial: boolean;
}

export interface AppContextProps {
  appState: AppStateProps;
  setLoadingEnd: (value: AppStateProps['loadingEnd']) => void;
  setTransition: (value: AppStateProps['transition']) => void;
  setTransitionInitial: (value: AppStateProps['transitionInitial']) => void;
}
