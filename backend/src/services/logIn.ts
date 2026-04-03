import "dotenv/config"
import bcrypt from "bcrypt"
import { prisma } from "../lib/prisma"
import { LogInData } from "../../../shared/types/auth"
import { generateJWT } from "./generateJWT"
import { User } from "../../../shared/types/auth"
export interface authControllData {
    tokenAccess: string
    tokenRefresh: string
    user: User
}
export async function logIn(params: LogInData): Promise<authControllData> {
    const user = await prisma.user.findUnique({
        where: {
            email: params.email
        }
    })
    if (!user) {
        throw new Error("User not found")
    }
    const isMatch = await bcrypt.compare(params.password, user.password)
    if (!isMatch) {
        throw new Error("Wrong password")
    }
    const { tokenAccess, tokenRefresh } = generateJWT(user.id, user.email)
    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            refreshToken: tokenRefresh
        }
    })
    return {
        tokenAccess,
        tokenRefresh,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    }
}
