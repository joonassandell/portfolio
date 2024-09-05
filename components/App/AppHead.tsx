import { APP_URL, GOOGLE_ANALYTICS, PRODUCTION_LIVE } from '@/lib/config';
import { type AppHeadProps } from './';
import { CONTENT } from '@/lib/sitemap';
import { Partytown } from '@builder.io/partytown/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';

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
    <>
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
        <meta content={ogImage} key="og:image" property="og:image" />
        <meta content="en" property="og:locale" />
        <meta content={appName} property="og:site_name" />s
        <meta content="website" property="og:type" />
        <meta content={`${APP_URL}${asPath}`} property="og:url" />
        {/* Twitter */}
        <meta content={title} key="twitter:title" name="twitter:title" />
        <meta
          content={description}
          key="twitter:description"
          name="twitter:description"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={twitter} name="twitter:creator" />
        <meta content={ogImage} key="twitter:image" name="twitter:image" />
        <meta content={twitter} name="twitter:site" />
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
        {/* Essential */}
        <meta
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          key="viewport"
          name="viewport"
        />
        <meta
          content={themeColor ? themeColor : '#000000'}
          key="theme-color"
          name="theme-color"
        />
        {GOOGLE_ANALYTICS && PRODUCTION_LIVE && (
          <Partytown forward={['dataLayer.push']} />
        )}
      </Head>
      {GOOGLE_ANALYTICS && PRODUCTION_LIVE && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}
            type="text/partytown"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
            `,
            }}
            id="google-analytics-script"
            type="text/partytown"
          />
        </>
      )}
    </>
  );
};
