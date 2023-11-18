/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 画像最適化を行わない
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'images.microcms-assets.io',
    //   },
    // ],
  },
};

module.exports = nextConfig;
