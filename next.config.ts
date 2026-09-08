import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/registro-odd',
        destination: 'https://forms.gle/8n9ABo1Vio33USuK8',
        permanent: false,
      },
      {
        source: '/registro-ait',
        destination: 'https://forms.gle/BqjDGocR5DxHPsk59', 
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
