/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    domains: ["i.imgur.com", "images.unsplash.com"],
  }
}

module.exports = nextConfig
