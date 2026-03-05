import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/registro-odd-mach-2026',
        destination: 'https://forms.gle/G2rSNQe9rWVU5Bqh6',
        permanent: false,
      },
    ];
  }
};



export default nextConfig;
