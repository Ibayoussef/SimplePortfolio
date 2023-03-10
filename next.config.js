module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    site: {
      name: "Portfolio",
      url:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://simple-portfolio-delta.vercel.app/",
    },
  },
  swcMinify: true,
  experimental: { appDir: true },
};
