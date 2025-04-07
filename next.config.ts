import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ar"], // Supported languages: English and Arabic
    defaultLocale: "en", // Default language
    // localeDetection: true, // Automatically detect the user's language
  },
  reactRoot: true,
  serverActions: true,
  // Enable this to reduce hydration bugs with translations
  legacyBrowsers: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
