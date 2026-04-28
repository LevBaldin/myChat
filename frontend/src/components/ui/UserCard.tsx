import Image from "next/image"
import { UsersPanel } from "./Users"
function UserCard(params: UsersPanel) {
    return (
        <li className="flex items-center gap-3 hover:bg-primary/50 active:bg-primary/90 p-1 h-20 overflow-clip hover:scale-101 duration-150 cursor-pointer">
            <Image className="rounded-full size-15" width={100} height={100} src={params.avatar} alt="someImage" />
            <div className="flex flex-col justify-evenly">
                <h3 className="text-2xl">{params.name}</h3>
                <p className="opacity-30 text-sm">{params.lastMessage || "..."}</p>
            </div>
        </li>
    )
}

export default UserCard
