/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: false,
    crossOrigin: 'anonymous',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            
          },
        ]
    }
};

export default nextConfig;
