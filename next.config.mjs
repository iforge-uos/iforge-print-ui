/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
}

export default nextConfig
