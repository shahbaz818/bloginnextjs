/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
                protocol: "https",
                hostname: "t4.ftcdn.net"
            },
            {
                protocol: "https",
                hostname: "*.google.com"
            },
            {
                protocol: "https",
                hostname: "media.istockphoto.com"
            },
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com"
            },
            {
                protocol: "https",
                hostname: "img.freepik.com"
            },
            {
                protocol: "https",
                hostname: "www.shutterstock.com"
            }
        ]
    }
};

export default nextConfig;