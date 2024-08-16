import { APP_URL } from '@/lib/config';
import { CONTENT } from '@/lib/sitemap';
import { type HeadProps } from './';
import { default as NextHead } from 'next/head';

export const Head = ({ children, description, ogImage, title }: HeadProps) => {
  const pageTitle = title
    ? `${CONTENT.meta.titlePrefix}${title ? ' — ' + title : ''}`
    : '';

  return (
    <NextHead>
      {title && (
        <>
          <title>{pageTitle}</title>
          <meta content={pageTitle} key="og:title" property="og:title" />
          <meta content={pageTitle} key="twitter:title" name="twitter:title" />
        </>
      )}
      {description && (
        <>
          <meta content={description} key="description" name="description" />
          <meta
            content={description}
            key="og:description"
            property="og:description"
          />
          <meta
            content={description}
            key="twitter:description"
            name="twitter:description"
          />
        </>
      )}
      {ogImage && (
        <>
          <meta
            content={`${APP_URL}${ogImage}`}
            key="og:image"
            property="og:image"
          />
          <meta
            content={`${APP_URL}${ogImage}`}
            key="twitter:image"
            name="twitter:image"
          />
        </>
      )}
      {children}
    </NextHead>
  );
};
