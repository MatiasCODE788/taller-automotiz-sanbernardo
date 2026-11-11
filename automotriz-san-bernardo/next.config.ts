import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Formatos modernos: las fotografías se sirven en AVIF/WebP automáticamente.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
