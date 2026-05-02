import { Request, Response } from "express"
import { getMessages } from "../services/getMessages"
export async function getMessagesControll(req: Request, res: Response) {
    try {
        const query = req.query.id as string
        const messages = await getMessages(query)
        res.status(200).json({ messages: messages })
    } catch (error) {
        res.status(500).json({ message: "Something wrong with server" + error })
    }
}
