import { APP, APP_URL } from '@/lib/config'
import { type HeadProps } from './'
import { default as NextHead } from 'next/head'

export const Head = ({
  children,
  description,
  ogImage,
  title,
  zoom = true,
}: HeadProps) => {
  const pageTitle = title
    ? `${APP.meta.titlePrefix}${title ? ' — ' + title : ''}`
    : ''

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
      {!zoom && (
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
          key="viewport"
          name="viewport"
        />
      )}
      {children}
    </NextHead>
  )
}
