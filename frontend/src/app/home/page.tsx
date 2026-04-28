"use client"
import { logOut } from "@/store/authSlice"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import axiosInstance from "../lib/axiosInterseptor"
import Button from "@/components/ui/Button"
import SelectionPanel from "@/components/SelectionPanel"

export default function Page() {
    const dispatch = useDispatch()
    const router = useRouter()
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
        } catch (error: unknown) {
            // const errorMessage = error.response?.data?.message || "Error occured"
            // toast.error(errorMessage)
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
            <div className="w-full h-full" id="messages"></div>
        </main>
    )
}
