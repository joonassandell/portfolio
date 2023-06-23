import { useRouter } from 'next/router';
import { isBrowser } from '@/lib/utility';

export const urlState = (href, router) => {
  const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN;
  const url = new URL(href, ORIGIN);

  return {
    active: url.pathname === (isBrowser ? location.pathname : router?.asPath),
    external: url.origin != (isBrowser ? location.origin : ORIGIN),
    url,
  };
};

export const useUrlState = href => {
  const router = useRouter();
  return urlState(href, router);
};
