// next.config.mjs
export default {
  reactStrictMode: true,
  output: "export", // This will enable static export
  images: {
    unoptimized: true, // Disable image optimization (important for static export)
  },
};
