/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // distDir: "build",
  reactStrictMode: true,
  output: "export", // makes an out folder which then is used to make a website live
  trailingSlash: true, // this line too
  images: {
    unoptimized: true,  // this is not a good choice for making a website live.. use node.js option on hostinger and eliminate this line
  },
};

export default nextConfig;
