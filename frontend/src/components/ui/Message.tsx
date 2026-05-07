import { IMessage } from "../../../../shared/types/types"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

function MessageItem({ id, content, createdAt, senderId }: IMessage) {
    const user = useSelector((state: RootState) => state.auth.user)
    const date = new Date(createdAt)
    const time = date.toLocaleTimeString("ua-UA", { hour: "2-digit", minute: "2-digit" })
    return (
        <div
            className={`${user?.id === senderId ? "bg-accent self-end rounded-br-none" : "bg-secondary rounded-bl-none self-start "} p-1 max-w-100 text-md rounded-xl w-fit flex gap-1`}
        >
            <p key={id}>{content}</p>
            <div className="self-end opacity-40 text-xs">{time}</div>
        </div>
    )
}

export default MessageItem
