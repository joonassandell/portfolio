import '@/stylesheets/index.scss';

import App from '@/containers/App';
import { useEffect } from 'react';

function NextApp({ Component, pageProps, router }) {
  /**
   * Remove this crap and portto.js once published
   */
  const production = !process.env.NEXT_PUBLIC_ENVIRONMENT;
  useEffect(() => {
    if (
      production &&
      router.route === '/portto' &&
      typeof window !== 'undefined'
    ) {
      localStorage.setItem('portto', '/');
      window.location.href = '/';
    }
  }, []);

  if (typeof window !== 'undefined') {
    const _ = localStorage.getItem('portto');
    if (!_ && production) return <></>;
  }

  return <App Component={Component} pageProps={pageProps} router={router} />;
}

export default NextApp;
