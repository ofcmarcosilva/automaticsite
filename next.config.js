/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The i18n config is removed as we're using App Router's built-in internationalization with middleware
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig 