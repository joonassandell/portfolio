import { type HeadProps } from './';
import { default as NextHead } from 'next/head';

export const Head = ({
  children,
  description,
  themeColor,
  title,
}: HeadProps) => {
  const pageTitle = title ? `Joonas Sandell${title ? ' — ' + title : ''}` : '';

  return (
    <NextHead>
      {title && (
        <>
          <title>{pageTitle}</title>
          <meta content={pageTitle} key="og:title" property="og:title" />
          <meta
            content={pageTitle}
            key="twitter:title"
            property="twitter:title"
          />
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
            property="twitter:description"
          />
        </>
      )}
      {themeColor && (
        <meta content={themeColor} key="theme-color" name="theme-color" />
      )}
      {children}
    </NextHead>
  );
};
