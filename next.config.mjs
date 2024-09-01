// import withBundleAnalyzer from '@next/bundle-analyzer';

// const bundleAnalyzerConfig = {
//   enabled: process.env.ANALYZE === 'true',
// };
/** @type {import('next').NextConfig} */

const nextConfig = {
    // enabled: process.env.ANALYZE === 'true',
    // reactStrictMode: true,
    async headers() {
        return [{
            source: '/api/(.*)',
            headers: [
              {
                "key": "Cache-Control",
                "value": "public, max-age=120, stale-while-revalidate=60"
              },
              {
                key: 'Access-Control-Allow-Origin',
                value: '*'
              },
              {
                key: 'Content-Security-Policy',
                value: "frame-ancestors 'self' *"
              },
              {
                key: 'Age',
                value: '3333'
              },
              {
                key: 'X-Frame-Options',
                value: 'ALLOW-FROM *'
              },
              {
                key: 'Access-Control-Allow-Credentials',
                value: 'true'
              },
              {
                key: 'Access-Control-Allow-Methods',
                value: 'GET,DELETE,PATCH,POST,PUT'
              },
              {
                key: 'Access-Control-Allow-Headers',
                value: 'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date'
              }
            ]
        }]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'arabhardware.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ahw.store',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack: (config) => {
      config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];
      return config;
    },
};

export default nextConfig
// export default withBundleAnalyzer(nextConfig);

// add this to scripts in package.json
// "analyze": "cross-env ANALYZE=true next build",
