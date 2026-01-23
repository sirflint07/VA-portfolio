/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/djpdesqrs/**',
    }
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
