import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image config
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [25, 50, 65],
    deviceSizes: [325, 415, 640, 768, 828, 1024, 1280, 1440, 1536, 1920, 2048, 3840],
    imageSizes: [16, 32, 64, 100, 128, 170, 190, 230, 256, 270, 310, 325, 355, 394, 415, 465, 534, 600, 640, 700, 768, 800, 828],
  },
  // Turbopack config
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              esModule: true,
            }
          }
        ],
        as: '*.js'
      }
    }
  },
  //  Webpack config
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{
        loader: '@svgr/webpack',
        options: {
          esModule: true
        }
      }]
    });
    return config;
  }
};

export default nextConfig;