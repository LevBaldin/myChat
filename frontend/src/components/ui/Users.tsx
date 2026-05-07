import { IUser } from "../../../../shared/types/types"
import ChatCard from "./UserCard"
export interface UsersPanel extends IUser {
    lastMessage: string
}
interface UserProps {
    data: UsersPanel[]
}
function Users({ data }: UserProps) {
    console.log(data)
    return (
        <ul className="flex flex-col hover:scale-99 transition">
            {data.map((el: UsersPanel) => {
                return <ChatCard key={el.id} {...el} />
            })}
        </ul>
    )
}

export default Users
