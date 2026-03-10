"use client"
import { useState } from "react"
import Input from "../ui/Input"
import Button from "../ui/Button"

function SignUpForm() {
    interface SignUpData {
        email: string
        username: string
        password: string
    }
    const [value, setValue] = useState<SignUpData>({ email: "", username: "", password: "" })
    return (
        <form action="" className="p-3 rounded-2xl min-w-2 bg-secondary flex flex-col gap-3">
            <Input setValue={setValue} value={value.email} type="text" id="email" placeholder="YoureEmail" label="Email:" />
            <Input setValue={setValue} value={value.password} type="password" id="password" placeholder="*****" label="Password:" />
            <Input setValue={setValue} value={value.username} type="text" id="username" placeholder="Your Nickname" label="Name:" />
            <div className="flex gap-5 justify-center items-center self-center flex-col max-w-4/5">
                <Button text="Sign up" bg="main" />
                {/* <Link href={"/"} className="">
                    I don&apos;t have an account
                </Link> */}
            </div>
        </form>
    )
}

export default SignUpForm
