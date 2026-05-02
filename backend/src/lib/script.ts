import "dotenv/config"
import { prisma } from "./prisma"

async function main() {
    // Вынесем ID в переменные, чтобы было удобно назначать отправителей сообщений
    const user1Id = "cmoedncoc00001sz40dc9ntvp"
    const user2Id = "cmo31epys0000fcz4z7pw3rga" // <- убрал лишний пробел в конце

    const chat = await prisma.chat.create({
        data: {
            participants: {
                connect: [{ id: user1Id }, { id: user2Id }]
            },
            // Добавляем стартовые сообщения через nested write (вложенную запись)
            messages: {
                create: [
                    {
                        content: "Hey! How is your new project going?",
                        senderId: user1Id
                    },
                    {
                        content: "Hi! It's going great. Just working on the backend stuff with Express and Prisma.",
                        senderId: user2Id
                    },
                    {
                        content: "Sounds awesome! Let me know if you need any help with testing.",
                        senderId: user1Id
                    }
                ]
            }
        },
        // Добавим include, чтобы Prisma вернула весь объект вместе с сообщениями для проверки
        include: {
            participants: true,
            messages: true
        }
    })

    console.log("Chat and messages created successfully:")
    console.dir(chat, { depth: null })
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
