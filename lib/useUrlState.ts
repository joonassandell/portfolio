import { isBrowser } from '@/lib/utils';
import { type NextRouter, useRouter } from 'next/router';

export const urlState = (href: URL['href'], router?: NextRouter) => {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
  const url = new URL(href, APP_URL);

  return {
    active: url.pathname === (isBrowser ? location.pathname : router?.asPath),
    external: url.origin != (isBrowser ? location.origin : APP_URL),
    url,
  };
};

export const useUrlState = (href: URL['href']) => {
  const router = useRouter();
  return urlState(href, router);
};
