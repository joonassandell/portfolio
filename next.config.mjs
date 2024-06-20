/** @type {import('next').NextConfig} */
import path from 'path';
import bundleAnalyzer from '@next/bundle-analyzer';
import { fileURLToPath } from 'url';

const { ANALYZE, VERCEL_ENV, IGNORE_ERRORS } = process.env;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const withBundleAnalyzer = bundleAnalyzer({
  enabled: ANALYZE === 'true',
});

const config = {
  eslint: {
    dirs: ['components', 'features', 'lib', 'pages', 'types'],
    ignoreDuringBuilds: IGNORE_ERRORS ? true : false,
  },
  experimental: { optimizeCss: true },
  ...(VERCEL_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warning', 'info'],
      },
    },
  }),
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
  },
  sassOptions: {
    includePaths: [path.join(__dirname), `${path.join(__dirname)}/stylesheets`],
  },
  typescript: {
    ignoreBuildErrors: IGNORE_ERRORS ? true : false,
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
        source: '/(.*).(jpe?g|png|ico|webp|svg|xml|mp4|woff2?)',
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
