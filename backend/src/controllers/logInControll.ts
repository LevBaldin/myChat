import express from "express"
import type { Application, Request, Response } from "express"
import { logIn } from "../services/logIn"

export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        console.log("Request recieved")
        const result = await logIn({ email, password })
        res.cookie("refreshToken", result.tokenRefresh, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.cookie("accessToken", result.tokenAccess, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000
        })
        res.status(200).json({
            user: result.user,
            tokenAccess: result.tokenAccess
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error?.message === "User not found") {
                return res.status(404).json({
                    message: error?.message
                })
            }
            if (error.message === "Wrong password") {
                return res.status(400).json({
                    message: error.message
                })
            }
        } else {
            return res.status(500).json({
                message: "Something wrong with the server"
            })
        }
    }
}
