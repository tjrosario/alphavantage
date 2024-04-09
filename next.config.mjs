/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'valueglance.com',
      },
    ],
  },
};

export default nextConfig;
