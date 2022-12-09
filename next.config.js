/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig:{
    IMAGE_URL: process.env.NEXT_PUBLIC_API_URL
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
