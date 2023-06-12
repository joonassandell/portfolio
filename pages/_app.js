import '@/stylesheets/index.scss';
import { App } from '@/components/App';

function NextApp({ Component, pageProps }) {
  return <App Component={Component} pageProps={pageProps} />;
}

export default NextApp;
