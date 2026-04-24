"use client"
import axiosInstance from "@/app/lib/axiosInterseptor"
import Users, { UsersPanel } from "./ui/Users"
import { useDispatch } from "react-redux"
import { setCredentials } from "@/store/authSlice"
import { useEffect, useState } from "react"
import Input from "./ui/Input"
import SelectionPanelSkeleton from "./ui/Skeletons/SelectionPanelSkeleton"
import Empty from "../../public/drawer-empty.svg"
import Image from "next/image"
export interface UserSearch {
    userSearch: string
}
function SelectionPanel() {
    const dispatch = useDispatch()
    const [data, setData] = useState<UsersPanel[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [value, setValue] = useState<UserSearch>({ userSearch: "" })
    const filteredData = data.filter((el) => el.name.toLowerCase().includes(value.userSearch.toLowerCase()))
    useEffect(() => {
        async function getData() {
            try {
                const user = await axiosInstance.get("/userdata")
                dispatch(setCredentials(user.data))
            } catch (error) {
                console.log(error)
            }
        }
        getData()
        fetch("fakeApi/getChats/")
            .then((res) => res.json())
            .then(setData)
            .finally(() => setIsLoading(false))
    }, [dispatch])
    return (
        <aside className="hidden sm:flex flex-col border-accent/30 border-r-2 rounded-xl h-full max-h-full overflow-x-clip">
            <div>
                <Input<UserSearch>
                    type="text"
                    disabled={isLoading}
                    id="userSearch"
                    setValue={setValue}
                    value={value.userSearch}
                    placeholder="Search user"
                />
            </div>
            <div className="sm:w-100 h-full overflow-y-scroll" id="chats">
                {isLoading ? (
                    <SelectionPanelSkeleton />
                ) : filteredData.length > 0 ? (
                    <Users data={filteredData} />
                ) : (
                    <div className="flex flex-col justify-center items-center gap-3 h-1/3">
                        <Image src={Empty} className="size-10" width={20} height={20} alt="No users image" />
                        <p className="self-center text-2xl">No chats here</p>
                    </div>
                )}
            </div>
        </aside>
    )
}

export default SelectionPanel
