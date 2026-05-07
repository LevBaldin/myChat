import { IUser } from "../../../../shared/types/types"
import { prisma } from "../../lib/prisma"

export async function findUserByTokenRefresh(tokenRefresh: string): Promise<{ user: IUser }> {
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
            email: user.email,
            avatar: user.avatar
        }
    }
}
