"use client"
import { logOut, setCredentials } from "@/store/authSlice"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import axiosInstance from "../lib/axiosInterseptor"
import { useEffect } from "react"

export default function Page() {
    const dispatch = useDispatch()
    const router = useRouter()

    async function getData() {
        try {
            const user = await axiosInstance.get("/userdata")
            dispatch(setCredentials(user.data))
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
    async function handleLogOut() {
        try {
            const result = await toast.promise(axiosInstance.post("auth/logout"), {
                loading: "loading",
                success: (res) => res.data.message || "must be ok but not",
                error: (err) => err?.response?.data?.message || "Logout failed"
            })
            router.push("/auth/login")
            dispatch(logOut())
            return result
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h2>Here will be main chat</h2>
            <Link href={"auth/login"}> go back to login</Link>
            <button onClick={handleLogOut}> log out</button>
        </div>
    )
}
