import { logIn } from "../../services/auth/logIn"
import { signUp } from "../../services/auth/signUp"
import { Request, Response } from "express"
export const signUpController = async (req: Request, res: Response) => {
    try {
        const { email, password, username } = req.body
        const result = await signUp({ email, password, username })

        console.log("Request for signUp recieved")
        res.status(201).json({
            user: result.user,
            tokenAccess: result.tokenAccess
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error?.message === "That email already have accaunt") {
                res.status(409).json({
                    message: error?.message
                })
            } else if (error?.message === "Password must be at least 8 characters") {
                res.status(400).json({
                    message: error?.message
                })
            }
            console.error("Unkown error:", error)
            return res.status(500).json({
                message: "Server error: " + error
            })
        }
    }
}
