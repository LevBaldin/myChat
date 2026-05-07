import { IChat, IMessage } from "../../../shared/types/types"
import { prisma } from "../lib/prisma"
export async function getMessages(id: string): Promise<Partial<Omit<IChat, "participants">>> {
    const messages = await prisma.chat.findUnique({
        where: {
            id: id
        },
        include: {
            messages: {
                select: {
                    id: true,
                    content: true,
                    senderId: true,
                    createdAt: true,
                    chatId: true
                },
                take: 30,
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    })
    return { id: messages?.id, messages: messages?.messages }
}
