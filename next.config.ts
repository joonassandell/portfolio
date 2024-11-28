import bundleAnalyzer from '@next/bundle-analyzer'
import path from 'path'
import type { NextConfig } from 'next'

const { ANALYZE, IGNORE_ERRORS, VERCEL_ENV } = process.env
const withBundleAnalyzer = bundleAnalyzer({
  enabled: ANALYZE === 'true',
})

const config: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString(),
  },
  eslint: {
    dirs: ['components', 'features', 'lib', 'pages', 'types'],
    ignoreDuringBuilds: IGNORE_ERRORS ? true : false,
  },
  experimental: {
    optimizeCss: true,
    reactCompiler: true,
    turbo: {
      rules: {
        '*.svg': {
          as: '*.js',
          loaders: ['@svgr/webpack'],
        },
      },
    },
  },
  ...(VERCEL_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warning', 'info'],
      },
    },
  }),
  async headers() {
    return [
      {
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
        locale: false,
        source: '/(.*).(jpe?g|png|ico|webp|svg|xml|mp4|woff2?)',
      },
    ]
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
  },
  async redirects() {
    return [
      {
        destination: '/Joonas-Sandell-CV.pdf',
        permanent: false,
        source: '/cv',
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname), `${path.join(__dirname)}/stylesheets`],
    silenceDeprecations: ['legacy-js-api'],
  },
  typescript: {
    ignoreBuildErrors: IGNORE_ERRORS ? true : false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default withBundleAnalyzer(config)
