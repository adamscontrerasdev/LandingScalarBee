import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 año
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Optimización de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimización de bundle
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  
  // Configuración de webpack para reducir bundle size
  webpack: (config, { isServer }) => {
    // Optimización de chunks
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: -10,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    return config;
  },
  
  // Optimización de output
  output: 'standalone',
  
  // Configuración de compresión
  compress: true,
  
  // Configuración de headers para caché
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
