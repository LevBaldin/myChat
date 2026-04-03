import type { Request, Response } from "express"
import { findUserByTokenRefresh } from "../services/findUserByTokenRefresh"
import { generateJWT } from "../services/generateJWT"
import jwt from "jsonwebtoken"
import { updateRefreshToken } from "../services/updateRefreshToken"
export const refresh = async (req: Request, res: Response) => {
    console.log("Auth controll worked")
    try {
        const oldTokenRefresh = req.cookies.refreshToken
        console.log("refresh token in refhresh " + oldTokenRefresh)
        if (!oldTokenRefresh) return res.status(401).json({ message: "No refresh token" })
        try {
            jwt.verify(oldTokenRefresh, process.env.JWT_SECRET_REFRESH as string)
        } catch (error: unknown) {
            return res.status(403).json({ message: "Refresh token invalid or expired" })
        }
        const userData = await findUserByTokenRefresh(oldTokenRefresh)
        if (!userData) return res.status(403).json({ message: "Invalid refresh token" })
        const { tokenAccess, tokenRefresh } = generateJWT(userData.user.id, userData.user.email)
        await updateRefreshToken({ id: userData.user.id, tokenRefresh: tokenRefresh })

        res.cookie("refreshToken", tokenRefresh, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.cookie("accessToken", tokenAccess, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000
        })
        res.status(200).json({
            message: "Tokens refreshed"
        })
    } catch (error: unknown) {
        console.error("authControll error: " + error)
        return res.status(500).json("Something wrong with server")
    }
}
