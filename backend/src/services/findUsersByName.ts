import { prisma } from "../lib/prisma"

export async function findUsersByName(value: string) {
    const data = await prisma.user.findMany({
        where: {
            name: {
                contains: value,
                mode: "insensitive"
            }
        },
        select: {
            id: true,
            name: true,
            avatar: true
        }
    })
    return data
}
