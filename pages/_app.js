import '@/stylesheets/index.scss';
import { App } from '@/components/App';

function NextApp({ Component, pageProps, router }) {
  return <App Component={Component} pageProps={pageProps} router={router} />;
}

export default NextApp;
