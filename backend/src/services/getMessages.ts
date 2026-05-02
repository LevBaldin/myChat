import { prisma } from "../lib/prisma"

export async function getMessages(id: string) {
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
                    createdAt: true
                },
                take: 30,
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    })
    return messages
}
