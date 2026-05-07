import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/**" // Эта звездочка разрешает любые пути внутри домена
            }
        ],
        domains: ["i.pravatar.cc"]
    }
}

export default nextConfig
