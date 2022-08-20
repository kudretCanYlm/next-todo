/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withLess = require("next-with-less")

module.exports = withLess({
  lessLoaderOptions: {},
})