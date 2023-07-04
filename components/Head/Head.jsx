import { default as NextHead } from 'next/head';

export const Head = ({ title, description, children }) => {
  const pageTitle = title ? `Joonas Sandell${title ? ' — ' + title : ''}` : '';

  return (
    <NextHead>
      {title && (
        <>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} key="og:title" />
          <meta
            property="twitter:title"
            content={pageTitle}
            key="twitter:title"
          />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} key="description" />
          <meta
            property="og:description"
            content={description}
            key="og:description"
          />
          <meta
            property="twitter:description"
            content={description}
            key="twitter:description"
          />
        </>
      )}
      {children}
    </NextHead>
  );
};
