import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL:60,
    dangerouslyAllowSVG:true,
    contentSecurityPolicy:"default-src 'self'; script-src 'none'; sandbox;",
    
  },
  experimental:{
    optimizePackageImports:['framer-motion','@motionone/dom'],
    optimizeCss:true,
  },
  compiler:{
    removeConsole: process.env.NODE_ENV === 'production',
  }
  
};


export default nextConfig;
