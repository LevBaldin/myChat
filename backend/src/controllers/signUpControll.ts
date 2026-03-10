import { signUp } from "../services/signUp"
import { Request, Response } from "express"
export const signUpController = async (req: Request, res: Response) => {
    try {
        const { email, password, username } = req.body
        const result = await signUp({ email, password, username })
        res.status(201).json({
            user: result.userData
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error?.message === "That email already have accaunt") {
                res.status(409).json({
                    message: error?.message
                })
            }
        }
    }
}
