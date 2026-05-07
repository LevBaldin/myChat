import { useSelector } from "react-redux"
import { IChat, IMessage } from "../../../../shared/types/types"
import MessageItem from "./Message"
import { RootState } from "@/store/store"

function Chat() {
    const openedChat: string | null = useSelector((state: RootState) => state.chat.openedChat)
    const chat: Omit<IChat, "participants"> | null = useSelector((state: RootState) => state.chat.chat)
    console.log(chat)
    return (
        <>
            {openedChat ? (
                <div className="flex flex-col justify-end gap-2 p-3 w-full h-full" id="messages">
                    {chat?.messages.map((el: IMessage) => {
                        return <MessageItem key={el.id} {...el} />
                    })}
                </div>
            ) : (
                <div className="flex place-content-center w-full h-full text-xl">
                    <p className="place-content-center">Open chat to see massages</p>
                </div>
            )}
        </>
    )
}

export default Chat
