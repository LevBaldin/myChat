import "dotenv/config"
import bcrypt from "bcrypt"
import { prisma } from "../lib/prisma"
import jwt from "jsonwebtoken"
export async function logIn(params: { email: string; password: string }) {
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
    const tokenAccess = jwt.sign(
        {
            userId: user.id,
            email: user.email
        },
        process.env.JWT_SECRET_ACCESS!,
        {
            expiresIn: "15m"
        }
    )
    const tokenRefresh = jwt.sign(
        {
            userId: user.id,
            email: user.email
        },
        process.env.JWT_SECRET_REFRESH!,
        {
            expiresIn: "7d"
        }
    )
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
