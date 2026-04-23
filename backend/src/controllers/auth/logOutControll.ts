import type { Request, Response } from "express"
import { logOut } from "../../services/auth/logOut"
export const logOutController = async (req: Request, res: Response) => {
    try {
        console.log("Request for logOut recieved")
        const tokenRefresh = req.cookies.refreshToken
        if (!tokenRefresh) return res.status(400).json({ message: "You are already logged out" })
        await logOut(tokenRefresh)
        res.clearCookie("accessToken")
        res.clearCookie("refreshToken")
        return res.status(200).json({ message: "Logged out successfully" })
    } catch (error: unknown) {
        res.status(500).json({ message: error })
    }
}
