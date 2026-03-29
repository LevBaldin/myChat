import type { Request, Response } from "express"
import { logOut } from "../services/logOut"
export const logOutController = async (req: Request, res: Response) => {
    try {
        console.log("Request for logOut recieved")
        const { id } = req.body
        if (!id) return res.status(400).json({ message: "User ID is required" })
        await logOut(id)
        res.clearCookie("accessToken")
        res.clearCookie("refreshToken")
        return res.status(200).json("Logged out successfully")
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message === "User was not found") {
                res.status(400).json("User with that id does not exist  ")
            }
        }
    }
}
