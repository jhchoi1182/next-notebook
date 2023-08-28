/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/food/', // 여기로 덮어씌움
        destination: '/food/api/key', // 원래 주소
      }
    ]
  }
}

module.exports = nextConfig
