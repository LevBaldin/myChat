import { Request, Response } from "express"
import { findUsersByName } from "../services/findUsersByName"


export const findUsersByNameControll = async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string
        const result = await findUsersByName(name)
        if (result.length === 0) {
            return res.status(404).json({ message: "No users found" })
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error })
    }
}
