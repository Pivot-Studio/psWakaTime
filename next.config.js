const wakaUrl = process.env.WAKA_URL;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images:{
    unoptimized:true
  },
};
// if production
if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/psWakaTime";
}

module.exports = nextConfig;
