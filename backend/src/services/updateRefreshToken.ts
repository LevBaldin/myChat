import { prisma } from "../lib/prisma"

export async function updateRefreshToken(params: { id: string; tokenRefresh: string }) {
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })
    prisma.user.update({
        where: {
            id: params.id
        },
        data: {
            refreshToken: params.tokenRefresh
        }
    })
}
