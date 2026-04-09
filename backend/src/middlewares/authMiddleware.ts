import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("auth middleware is working")
    const token = req.cookies.accessToken
    if (!token) {
        return res.status(401).json("Access token not found (authMiddleware)")
    }
    const secret = process.env.JWT_SECRET_ACCESS
    if (!secret) {
        return res.status(500).json("JWT secret not configured")
    }
    try {
        const userData = jwt.verify(token, secret)
        ;(req as any).user = userData
        next()
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(401).json("Invalid token")
        }
    }
}
