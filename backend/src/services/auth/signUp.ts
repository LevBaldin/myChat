import { prisma } from "../../lib/prisma"
import bcrypt from "bcrypt"
import { authControllData, logIn } from "./logIn"
export async function signUp(params: { email: string; password: string; username: string }): Promise<authControllData> {
    const user = await prisma.user.findUnique({
        where: {
            email: params.email
        }
    })

    if (user) {
        throw new Error("That email already have accaunt")
    }

    if (params.password.length < 8) {
        throw new Error("Password must be at least 8 characters")
    }

    const hashedPassword = await bcrypt.hash(params.password, 10)

    const newData = await prisma.user.create({
        data: {
            email: params.email,
            password: hashedPassword,
            name: params.username,
            avatar: "https://res.cloudinary.com/dk7p9j9ye/image/upload/v1776953782/stock_image_lomcvh.jpg"
        }
    })

    const authData = await logIn({
        email: params.email,
        password: params.password
    })
    return { ...authData }
}
