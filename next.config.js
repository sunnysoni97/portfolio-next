/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  basePath: isProd ? "/portfolio-next" : "",
  output: "export",
  assetPrefix: isProd ? "/portfolio-next/" : "",
};

module.exports = nextConfig;
