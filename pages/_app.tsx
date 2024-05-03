import '@/stylesheets/index.scss';
import { App } from '@/components/App';
import type { AppProps as NextAppProps } from 'next/app';

export default function NextApp({ Component, pageProps }: NextAppProps) {
  return <App Component={Component} pageProps={pageProps} />;
}
