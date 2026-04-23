"use client"
import axiosInstance from "@/app/lib/axiosInterseptor"
import Users from "./ui/Users"
import UserSearch from "./UserSearch"
import { useDispatch } from "react-redux"
import { setCredentials } from "@/store/authSlice"
import { useEffect } from "react"

function SelectionPanel() {
    const dispatch = useDispatch()
    async function getData() {
        try {
            const user = await axiosInstance.get("/userdata")
            dispatch(setCredentials(user.data))
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="hidden sm:flex flex-col rounded-xl h-full max-h-full overflow-x-clip">
            <UserSearch />
            <div className="sm:w-100 h-full overflow-y-scroll" id="chats">
                <Users />
            </div>
        </div>
    )
}

export default SelectionPanel
