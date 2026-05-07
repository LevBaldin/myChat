"use client"
import { io } from "socket.io-client"
import { logOut } from "@/store/authSlice"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../lib/axiosInterseptor"
import Button from "@/components/ui/Button"
import SelectionPanel from "@/components/SelectionPanel"
import { useEffect, useState } from "react"
import { RootState } from "@/store/store"
import Chat from "@/components/ui/Chat"

const socket = io("http://localhost:5000")
socket.on("connect", () => {
    console.log(socket.id)
})
export default function Page() {
    const dispatch = useDispatch()
    const chat = useSelector((state: RootState) => state.chat)
    const [messages, setMessages] = useState([])
    const router = useRouter()
    useEffect(() => {
        socket.connect()
        socket.on("connect", () => {
            console.log("socket connected")
        })
    }, [])
    async function handleLogOut() {
        socket.emit("abs", "sosu hui")
        try {
            const result = await toast.promise(axiosInstance.post("auth/logout"), {
                loading: "loading",
                success: (res) => res.data.message || "must be ok but not",
                error: (err) => err?.response?.data?.message || "Logout failed"
            })
            router.push("/auth/login")
            dispatch(logOut())
            return result
        } catch (error: unknown) {
            console.dir(error)
        }
    }
    return (
        <main className="flex h-dvh overflow-clip">
            <div className="right-3 bottom-3 z-10 fixed">
                <Button bg="main" onClick={handleLogOut}>
                    log out
                </Button>
            </div>
            <div className="hidden sm:block bg-primary w-full max-w-20 h-full" id="pref"></div>

            <SelectionPanel />
            <Chat />
        </main>
    )
}
