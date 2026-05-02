import { Request, Response } from "express"
import { getChats } from "../services/getChats"
export async function getChatsControll(req: Request, res: Response) {
    const id = req.query.id as string
    try {
        const result = await getChats(id)
        res.status(200).json({ chats: result })
    } catch (error) {
        res.status(500).json("Something wrong " + error)
    }
}
