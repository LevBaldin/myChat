import { prisma } from "../../lib/prisma"

export async function logOut(tokenRefresh: string): Promise<void> {
    const deleteTokenRefresh = await prisma.user.update({
        where: {
            refreshToken: tokenRefresh
        },
        data: {
            refreshToken: null
        }
    })
}
