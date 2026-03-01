import { useState } from "react"
import Input from "../ui/Input"
import Button from "../ui/Button"
import Link from "next/link"

function SignUpForm() {
    interface SignUpData {
        email: string
        username: string
        password: string
    }
    const [value, setValue] = useState<SignUpData>({ email: "", username: "", password: "" })
    return (
        <form action="" className="p-3 rounded-2xl min-w-2 bg-secondary flex flex-col gap-5">
            <Input setValue={setValue} value={value.email} type="text" id="email" placeholder="YoureEmail" label="Email:" />
            <Input setValue={setValue} value={value.password} type="password" id="password" placeholder="*****" label="Password:" />
            <div className="flex gap-5 justify-center items-center self-center flex-col max-w-4/5">
                <Button text="Log In" bg="main" />
                <Link href={"/"} className="">
                    I don't have an account
                </Link>
            </div>
        </form>
    )
}

export default SignUpForm
