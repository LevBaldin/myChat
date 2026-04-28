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
import Button from "./ui/Button"
import toast from "react-hot-toast"
import { AxiosError } from "axios"
export interface UserSearch {
    userSearch: string
}
function SelectionPanel() {
    const dispatch = useDispatch()
    const [data, setData] = useState<UsersPanel[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [value, setValue] = useState<UserSearch>({ userSearch: "" })
    const [searchNew, setSearchNew] = useState<boolean>(false)
    const [newData, setNewData] = useState<UsersPanel[]>([])
    const filteredData: UsersPanel[] = searchNew ? [] : data.filter((el) => el.name.toLowerCase().includes(value.userSearch.toLowerCase()))
    useEffect(() => {
        if (!searchNew) {
            return
        }
        let timeout: ReturnType<typeof setTimeout>
        async function findUsers() {
            timeout = setTimeout(async () => {
                try {
                    if (value.userSearch.length === 0) {
                        setNewData([])
                        return
                    }
                    const res = await axiosInstance.get("/users", {
                        params: {
                            name: value.userSearch
                        }
                    })
                    setNewData(res.data)
                    console.log(newData)
                } catch (error: unknown) {
                    if (error instanceof AxiosError) {
                        setNewData([])
                        toast.error(error?.response?.data.message)
                    }
                }
            }, 300)
        }
        findUsers()
        return () => {
            clearTimeout(timeout)
        }
    }, [value.userSearch, searchNew])
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
    function handleToggleSearchMode() {
        setSearchNew((prev) => !prev)
        setValue({ userSearch: "" })
    }
    return (
        <aside className="hidden sm:flex flex-col border-accent/30 border-r-2 rounded-xl h-full max-h-full overflow-x-clip">
            <Input<UserSearch>
                type="text"
                disabled={isLoading}
                id="userSearch"
                setValue={setValue}
                value={value.userSearch}
                placeholder={searchNew ? "Add new chat" : "Search user"}
            />
            <div className="flex justify-between place-content-center mr-2 ml-2 border-accent/50 border-b-2 rounded-xl w-fit h-fit text-md">
                <Button onClick={handleToggleSearchMode} type="button">
                    {searchNew ? "Cancel" : "Press to add new chat"}
                </Button>
            </div>
            <div className="sm:w-100 h-full overflow-y-scroll" id="chats">
                {isLoading ? (
                    <SelectionPanelSkeleton />
                ) : searchNew && newData.length > 0 ? (
                    <Users data={newData} />
                ) : filteredData.length > 0 ? (
                    <Users data={filteredData} />
                ) : (
                    <div className="flex flex-col justify-center items-center gap-3 h-1/3">
                        {!!value.userSearch.length && <Image src={Empty} className="size-10" width={20} height={20} alt="No users image" />}
                        <p className="self-center text-2xl">{!!value.userSearch.length ? "No chats here" : "Start typing to find someone"}</p>
                    </div>
                )}
            </div>
        </aside>
    )
}

export default SelectionPanel
