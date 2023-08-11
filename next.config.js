const wakaUrl = process.env.WAKA_URL;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${wakaUrl}/api/v1/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wakatime.com",
        port: '',
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
