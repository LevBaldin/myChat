"use client"
import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import { LogInData } from "@/app/auth/page"
import Link from "next/link"
import axios from "axios"

function LoginForm() {
    const [value, setValue] = useState<LogInData>({ email: "", password: "" })
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const res = await axios({
                method: "post",
                url: "http://localhost:5000/api/auth/login",
                data: value,
                withCredentials: true
            })
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} action="" className="p-3 rounded-2xl min-w-2 bg-secondary flex flex-col gap-5">
                <Input setValue={setValue} value={value.email} type="text" id="email" placeholder="YoureEmail" label="Email:" />
                <Input setValue={setValue} value={value.password} type="password" id="password" placeholder="*****" label="Password:" />
                <div className="flex gap-5 justify-center items-center self-center flex-col max-w-4/5">
                    <Button text="Log In" bg="main" />
                    <Link href={"/"} className="">
                        I don't have an account
                    </Link>
                </div>
            </form>
        </>
    )
}

export default LoginForm
