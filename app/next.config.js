/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['n.nordstrommedia.com', 'i.pinimg.com', 'cdn.modamizbir.com', 'productimages.hepsiburada.net',
  'f-lwr-l.mncdn.com'],
  },
}

module.exports = nextConfig
