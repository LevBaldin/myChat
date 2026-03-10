"use client"
import React, { useEffect, useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import { LogInData } from "@/app/auth/login/page"
import Link from "next/link"
import axios from "axios"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setCredentials } from "@/store/authSlice"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

function LoginForm() {
    const [value, setValue] = useState<LogInData>({ email: "", password: "" })
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.auth)
    const router = useRouter()
    useEffect(() => {
        if (state.isAuth) {
            router.push("/")
        }
    }, [state.isAuth, router])

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault()
        try {
            const result = await toast.promise(axios.post("http://localhost:5000/api/auth/login", value, { withCredentials: true }), {
                loading: "Loading",
                success: (data) => `Welcome ${data.data.user.name}`,
                error: (err) => err?.response?.data?.message || "Login failed"
            })
            dispatch(setCredentials(result.data))
            setTimeout(() => {
                router.push("/")
            }, 500)
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data.message)
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} action="" className="p-3 rounded-2xl min-w-2 bg-secondary flex flex-col gap-3">
            <Input setValue={setValue} value={value.email} type="text" id="email" placeholder="Your Email" label="Email:" />
            <Input setValue={setValue} value={value.password} type="password" id="password" placeholder="*****" label="Password:" />
            <div className="flex gap-5 justify-center items-center self-center flex-col max-w-4/5">
                <Button text="Log In" bg="main" />
                <Link href={"/auth/signup"} className="">
                    I don&apos;t have an account
                </Link>
            </div>
        </form>
    )
}

export default LoginForm
