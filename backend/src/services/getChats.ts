import { User } from "@prisma/client"
import { prisma } from "../lib/prisma"
import { IChat } from "../../../shared/types/types"

export async function getChats(id: string): Promise<IChat[]> {
    const chats = await prisma.chat.findMany({
        where: {
            participants: {
                some: {
                    id: id
                }
            }
        },
        include: {
            participants: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    avatar: true
                }
            },
            messages: {
                take: 1,
                select: {
                    id: true,
                    content: true,
                    chatId: true,
                    senderId: true,
                    createdAt: true
                }
            }
        }
    })
    return chats
}
