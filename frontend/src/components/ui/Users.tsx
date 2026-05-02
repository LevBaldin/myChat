import { User } from "../../../../shared/types/auth"
import ChatCard from "./UserCard"
export interface UsersPanel extends User {
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
