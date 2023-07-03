import { default as NextHead } from 'next/head';

export const Head = ({ title, description, children }) => {
  const pageTitle = title ? `Joonas Sandell${title ? ' — ' + title : ''}` : '';

  return (
    <NextHead>
      {title && (
        <>
          <title>{pageTitle}</title>
          <meta content={pageTitle} property="og:title" key="og:title" />
          <meta
            content={pageTitle}
            property="twitter:title"
            key="twitter:title"
          />
        </>
      )}
      {description && (
        <>
          <meta content={description} name="description" key="description" />
          <meta
            content={description}
            property="og:description"
            key="og:description"
          />
          <meta
            content={description}
            property="twitter:description"
            key="twitter:description"
          />
        </>
      )}
      {children}
    </NextHead>
  );
};
