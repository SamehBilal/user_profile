/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: 'Content-Security-Policy',  value: "frame-ancestors 'self' *" },
                    { key: 'X-Frame-Options', value: 'allow-from *', },
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date" },
                ]
            },
            {
                source: "/refresh/cookie",
                headers: [
                    { key: 'Content-Security-Policy',  value: "frame-ancestors 'self' *" },
                    { key: 'X-Frame-Options', value: 'allow-from *', },
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date" },
                ]
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'arabhardware.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
