import { prisma } from "../lib/prisma"

export async function logOut(id: string): Promise<void> {
    const deleteTokenRefresh = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            refreshToken: null
        }
    })
}
