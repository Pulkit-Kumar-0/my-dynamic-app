// next.config.mjs
export default {
  reactStrictMode: true,
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable image optimization if using export
  },
};
