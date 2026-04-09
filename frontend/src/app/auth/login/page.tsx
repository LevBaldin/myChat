"use client"
import LoginForm from "@/components/forms/LoginForm"
import AuthLayout from "../AuthLayout"

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>
export default function Page() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    )
}
