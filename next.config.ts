import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 500,
      };
    }
    return config;
  },
};

export default nextConfig;
