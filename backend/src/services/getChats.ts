import { User } from "@prisma/client"
import { prisma } from "../lib/prisma"

export async function getChats(id: string) {
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
