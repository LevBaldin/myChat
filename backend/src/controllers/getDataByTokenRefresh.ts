import { Request, Response } from "express"
import { findUserByTokenRefresh } from "../services/findUserByTokenRefresh"
export async function getDataByTokenRefresh(req: Request, res: Response) {
    const tokenRefresh = req.cookies.refreshToken
    if (!tokenRefresh) res.status(401).json({ message: "tokenRefresh not found" })
    try {
        const userData = await findUserByTokenRefresh(tokenRefresh)
        res.status(200).json(userData)
    } catch (error: unknown) {
        if (error instanceof Error) if (error.message === "User not found by tokenRefresh") res.status(403).json({ message: error.message })
    }
}
