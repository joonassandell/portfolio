/** @type {import('next').NextConfig} */
import path from 'path';
import bundleAnalyzer from '@next/bundle-analyzer';
import { fileURLToPath } from 'url';

const { ANALYZE, VERCEL_ENV, VERCEL_URL, NEXT_PUBLIC_APP_URL } = process.env;
const preview = VERCEL_ENV === 'preview';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const withBundleAnalyzer = bundleAnalyzer({
  enabled: ANALYZE === 'true',
});

const config = {
  env: {
    NEXT_PUBLIC_APP_URL: preview
      ? `https://${VERCEL_URL}`
      : NEXT_PUBLIC_APP_URL,
  },
  experimental: { optimizeCss: true },
  ...(VERCEL_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warning', 'info'],
      },
    },
  }),
  sassOptions: {
    includePaths: [path.join(__dirname), `${path.join(__dirname)}/stylesheets`],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*).(jpe?g|png|ico|webp|svg|xml|ttf|woff2?)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(config);
