import { DISABLE_LOADING } from '@/lib/config'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className={!DISABLE_LOADING ? 'is-loading' : undefined} lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
