"use client"
import ChatCard from "./UserCard"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { IChat } from "../../../../shared/types/types"

interface UsersProps {
    data: IChat[]
}
function Chats({ data }: UsersProps) {
    const user = useSelector((state: RootState) => state.auth.user)
    return (
        <ul className="flex flex-col hover:scale-99 transition">
            {data.map((el: IChat) => {
                const participant = el.participants.find((participant) => participant.id !== user?.id)
                if (!participant) return null
                return <ChatCard key={el.id} lastMessage={el.messages[0]?.content ?? ""} chatId={el.id as string} {...participant} />
            })}
        </ul>
    )
}

export default Chats
