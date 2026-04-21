"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { User } from "../../../../shared/types/auth"

function Users() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("fakeApi/getChats")
            .then((res) => res.json())
            .then(setData)
    }, [])
    return (
        <ol className="flex flex-col hover:scale-99 transition">
            {data.map((el: any) => {
                return (
                    <li
                        key={el.id}
                        className="flex items-center gap-3 hover:bg-primary/50 active:bg-primary/90 p-1 h-20 overflow-clip hover:scale-101 duration-150 cursor-pointer"
                    >
                        <Image className="rounded-full size-15" width={100} height={100} src={el.avatar} alt="someImage" />
                        <div className="flex flex-col justify-evenly">
                            <h3 className="text-2xl">{el.name}</h3>
                            <p className="opacity-30 text-sm">{el.lastMessage}</p>
                        </div>
                    </li>
                )
            })}
        </ol>
    )
}

export default Users
