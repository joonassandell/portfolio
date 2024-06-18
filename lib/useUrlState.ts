import { APP_URL } from '@/lib/config';
import { isBrowser } from '@/lib/utils';
import { type NextRouter, useRouter } from 'next/router';

export const urlState = (href: URL['href'], router?: NextRouter) => {
  const url = new URL(href, APP_URL);
  const external = url.origin != (isBrowser ? location.origin : APP_URL);

  return {
    active: url.pathname === (isBrowser ? location.pathname : router?.asPath),
    external,
    externalTarget: external ? '_blank' : undefined,
    url,
  };
};

export const useUrlState = (href: URL['href']) => {
  const router = useRouter();
  return urlState(href, router);
};
