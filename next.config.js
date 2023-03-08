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
          : "https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app",
      title: "Next.js + Tailwind CSS template",
      description: "Next.js + Tailwind CSS template",
      socialPreview: "/images/preview.png",
    },
  },
  swcMinify: true,
  experimental: { appDir: true },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};
