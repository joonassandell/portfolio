import { isBrowser } from '@/lib/utils';
import { type NextRouter, useRouter } from 'next/router';

export const urlState = (href: URL['href'], router?: NextRouter) => {
  const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN;
  const url = new URL(href, ORIGIN);

  return {
    active: url.pathname === (isBrowser ? location.pathname : router?.asPath),
    external: url.origin != (isBrowser ? location.origin : ORIGIN),
    url,
  };
};

export const useUrlState = (href: URL['href']) => {
  const router = useRouter();
  return urlState(href, router);
};
