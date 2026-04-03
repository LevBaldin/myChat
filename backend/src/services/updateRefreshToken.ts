import { prisma } from "../lib/prisma"

export async function updateRefreshToken(params: { id: string; tokenRefresh: string }): Promise<void> {
    const update = await prisma.user.update({
        where: {
            id: params.id
        },
        data: {
            refreshToken: params.tokenRefresh
        }
    })
}
