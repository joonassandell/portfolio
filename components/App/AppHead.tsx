import { APP_URL } from '@/lib/config';
import { type AppHeadProps } from './';
import { CONTENT } from '@/lib/sitemap';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const AppHead = ({ themeColor }: AppHeadProps) => {
  const { asPath } = useRouter();
  const {
    appName,
    description,
    favIcon,
    favIconIco,
    ogImage,
    title,
    touchIcon,
  } = CONTENT.meta;
  const {
    email,
    name,
    thumbnail,
    title: { combined },
    twitter,
    url,
  } = CONTENT.person;

  return (
    <Head>
      {/* Common */}
      <title>{title}</title>
      <meta content={description} key="description" name="description" />
      {/* Open Graph */}
      <meta content={title} key="og:title" property="og:title" />
      <meta
        content={description}
        key="og:description"
        property="og:description"
      />
      <meta content={ogImage} property="og:image" />
      <meta content="en" property="og:locale" />
      <meta content={appName} property="og:site_name" />s
      <meta content="website" property="og:type" />
      <meta content={`${APP_URL}${asPath}`} property="og:url" />
      {/* Twitter */}
      <meta content={title} key="twitter:title" property="twitter:title" />
      <meta
        content={description}
        key="twitter:description"
        property="twitter:description"
      />
      <meta content="summary_large_image" property="twitter:card" />
      <meta content={twitter} property="twitter:creator" />
      <meta content={ogImage} property="twitter:image" />
      <meta content={twitter} property="twitter:site" />
      {/* Icons */}
      <link href={touchIcon} rel="apple-touch-icon" sizes="180x180" />
      <link href={favIconIco} rel="icon" sizes="any" />
      <link href={favIcon} rel="icon" type="image/svg+xml" />
      <link color="#eeeae5" href={favIcon} rel="mask-icon" />
      {/* Web app */}
      <meta content={appName} name="apple-mobile-web-app-title" />
      <meta content={appName} name="application-name" />
      {/* Schema.org */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            email: `mailto:${email}`,
            image: thumbnail,
            jobTitle: combined,
            name,
            url,
          }),
        }}
        type="application/ld+json"
      />
      {/* Fonts */}
      <link
        as="font"
        crossOrigin="anonymous"
        href="/static/fonts/Px-Grotesk-Regular.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/static/fonts/Px-Grotesk-Regular-Italic.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/static/fonts/Px-Grotesk-Light.woff2"
        rel="preload"
        type="font/woff2"
      />
      {/* Google */}
      <meta content={thumbnail} name="thumbnail" />
      {/* Essential */}
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        name="viewport"
      />
      <meta
        content={themeColor ? themeColor : '#000000'}
        key="theme-color"
        name="theme-color"
      />
    </Head>
  );
};
