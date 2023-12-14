/** @type {import('next').NextConfig} */

require("dotenv").config();
const isProdTest = process.env.PROD_TEST;

const nextConfig = {
  basePath: isProdTest ? "" : "/portfolio-next",
  output: "export",
};

module.exports = nextConfig;
