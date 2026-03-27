import { NextRequest, NextResponse } from "next/server"
import path from "path"

export function proxy(req: NextRequest) {
    const token = req.cookies.get("accessToken")?.value
    const { pathname } = req.nextUrl
    if (token && pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/home", req.url))
    }
    if (!token && pathname.startsWith("/home")) {
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }
    if (pathname === "/") {
        if (token) {
            return NextResponse.redirect(new URL("/home", req.url))
        } else {
            return NextResponse.redirect(new URL("/auth/login", req.url))
        }
    }
}

export const config = {
    matcher: ["/", "/home/:path*", "/auth/:path*"]
}
