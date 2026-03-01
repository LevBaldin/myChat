import express from "express"
import type { Application, Request, Response } from "express"
import { logIn } from "../services/logIn"
// const app: Application = express()
// app.get((req:Request, res:Response) => {

// })
export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const result = await logIn({ email, password })
        res.cookie("refreshToken", result.tokenRefresh, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.status(200).json({
            user: result.user,
            tokenAccess: result.tokenAccess
        })
    } catch (error: any) {
        res.status(401).json({
            message: error.message
        })
    }
}
