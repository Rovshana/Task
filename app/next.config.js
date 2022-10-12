/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['n.nordstrommedia.com', 'i.pinimg.com', 'cdn.modamizbir.com', 'productimages.hepsiburada.net',
  'f-lwr-l.mncdn.com', "img-colinstr.mncdn.com", "static.elbisebul.com", "www.5in1canpolat.com" ,"www.bulalgiy.com", "www.bulalgiy.com", "www.falconeri.com", "www.5in1canpolat.com"],
  },
}

module.exports = nextConfig
