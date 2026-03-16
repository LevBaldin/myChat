"use client"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import { LogInData } from "../../../../../shared/types/auth"
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
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.auth)
    const router = useRouter()
    useEffect(() => {
        if (state.isAuth) {
            router.push("/")
        }
    }, [state.isAuth, router])

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setIsDisabled((prev) => !prev)
        setTimeout(() => {
            setIsDisabled((prev) => !prev)
        }, 1000)
        try {
            const result = await toast.promise(axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, value, { withCredentials: true }), {
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

    // const throttledSubmit = useMemo(() => throttle(handleSubmit), [handleSubmit])
    return (
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3 bg-secondary p-2 rounded-2xl max-w-5/6">
            <Input setValue={setValue} value={value.email} type="text" id="email" placeholder="Your Email" label="Email:" />
            <Input setValue={setValue} value={value.password} type="password" id="password" placeholder="*****" label="Password:" />
            <div className="flex flex-col justify-center items-center self-center gap-5 max-w-4/5">
                <Button text="Log In" bg="main" disabled={isDisabled} />
                <Link href={"/auth/signup"} className="">
                    I don&apos;t have an account
                </Link>
            </div>
        </form>
    )
}

export default LoginForm
function throrrle<T>(handleSubmit: (e: React.SubmitEvent) => Promise<void>) {
    throw new Error("Function not implemented.")
}
