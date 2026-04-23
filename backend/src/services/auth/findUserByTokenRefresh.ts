import { prisma } from "../../lib/prisma"

export async function findUserByTokenRefresh(tokenRefresh: string) {
    const user = await prisma.user.findUnique({
        where: {
            refreshToken: tokenRefresh
        }
    })
    if (!user) throw new Error("User not found by tokenRefresh")
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    }
}
