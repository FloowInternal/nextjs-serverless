/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: 'serverless',
  trailingSlash: true,
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    BUILD_TIME: new Date().toString()
  }
}

module.exports = nextConfig
