/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true, // リロードしても404を出さない
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
