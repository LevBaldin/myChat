import { prisma } from "../lib/prisma"
import bcrypt from "bcrypt"
export async function signUp(params: { email: string; password: string; username: string }) {
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
    const hashPassword = await bcrypt.hash(params.password, 10)

    const userData = await prisma.user.create({
        data: {
            email: params.email,
            password: hashPassword,
            name: params.username
        }
    })
    return { userData }
}
