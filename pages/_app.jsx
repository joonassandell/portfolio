import '@/stylesheets/index.scss';
import { App } from '@/components/App';

export default function NextApp({ Component, pageProps }) {
  return <App Component={Component} pageProps={pageProps} />;
}
