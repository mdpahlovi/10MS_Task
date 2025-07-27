import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            new URL("https://cdn.10minuteschool.com/**"),
            new URL("https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/**"),
        ],
    },
};

export default nextConfig;
