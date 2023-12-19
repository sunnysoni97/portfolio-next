/** @type {import('next').NextConfig} */

require("dotenv").config();
const isProdTest = String(process.env.NEXT_PUBLIC_PROD_TEST).toLowerCase();

const nextConfig = {
  basePath: isProdTest === "true" ? "" : "/portfolio-next",
  output: "export",
};

module.exports = nextConfig;
