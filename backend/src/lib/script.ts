import "dotenv/config"
import bcrypt from "bcrypt"
import { prisma } from "./prisma"
async function main() {
    const password: string = "Password123"
    const hash = bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            email: "email@gmail.com",
            name: "Name",
            password: (await hash).toString()
        }
    })

    console.log("User created")
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
