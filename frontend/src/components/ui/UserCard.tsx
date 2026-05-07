import Image from "next/image"
import { IUser } from "../../../../shared/types/types"
import { useDispatch } from "react-redux"
import { setMessages } from "@/store/chatSlice"
import axiosInstance from "@/app/lib/axiosInstance"
interface UserCardProps extends IUser {
    lastMessage?: string
    chatId?: string
}
function UserCard({ name, avatar, lastMessage, chatId }: UserCardProps) {
    const dispatch = useDispatch()
    console.log(chatId)
    async function getMessages(chatId: string) {
        try {
            const result = await axiosInstance.get("/messages", {
                params: {
                    id: chatId
                }
            })
            return result.data.messages
        } catch (error) {
            console.log(error)
        }
    }
    async function handleClick() {
        try {
            if (!chatId) throw new Error("no user id")
            const data = await getMessages(chatId)
            dispatch(setMessages({ openedChat: chatId ?? null, chat: data }))
        } catch (error: unknown) {
            console.log(error)
        }
    }
    return (
        <li
            onClick={handleClick}
            className="flex items-center gap-3 hover:bg-primary/50 active:bg-primary/90 p-1 h-20 overflow-clip hover:scale-101 duration-150 cursor-pointer"
        >
            <Image className="rounded-full size-15" width={100} height={100} src={avatar} alt="someImage" />
            <div className="flex flex-col justify-evenly">
                <h3 className="text-2xl">{name}</h3>
                <p className="opacity-30 text-sm">{lastMessage || ""}</p>
            </div>
        </li>
    )
}

export default UserCard
