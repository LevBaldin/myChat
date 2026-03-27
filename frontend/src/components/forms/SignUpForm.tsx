"use client"
import { useState } from "react"
import Input from "../ui/Input"
import Button from "../ui/Button"
import axios from "axios"
import toast from "react-hot-toast"
import Link from "next/link"

export interface SignUpData {
    email: string
    username: string
    password: string
    confirmPassword: string
}
function SignUpForm() {
    const [value, setValue] = useState<SignUpData>({ email: "", username: "", password: "", confirmPassword: "" })
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault()
        setIsDisabled((prev) => !prev)
        setTimeout(() => {
            setIsDisabled((prev) => !prev)
        }, 1000)
        if (value.password !== value.confirmPassword) {
            toast.error("Passwords must match")
            return
        }
        try {
            const response = await toast.promise(axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/signup`, value, { withCredentials: true }), {
                loading: "Loading",
                success: (data) => `Welcome ${data.data.user.name}`,
                error: (err) => `${err.response?.data.message} ` || "Failed to create user"
            })
            console.log(response)
        } catch (error: unknown) {
            if (error instanceof Error) console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} action="" className="flex flex-col justify-evenly gap-1 bg-secondary p-3 rounded-2xl min-w-2">
            <Input setValue={setValue} value={value.email} type="text" id="email" placeholder="YoureEmail" label="Email:" />
            <Input setValue={setValue} value={value.password} type="password" id="password" placeholder="*****" label="Password:" />
            <Input
                setValue={setValue}
                value={value.confirmPassword}
                type="password"
                id="confirmPassword"
                placeholder="Confirm pass"
                label="Confirm password:"
            />
            <Input setValue={setValue} value={value.username} type="text" id="username" placeholder="Your Nickname" label="Name:" />
            <div className="flex flex-col justify-center items-center self-center gap-5 max-w-4/5">
                <Button text="Sign up" bg="main" disabled={isDisabled} />
                <Link href={"/auth/login"} className="">
                    I already have an account
                </Link>
            </div>
        </form>
    )
}

export default SignUpForm
