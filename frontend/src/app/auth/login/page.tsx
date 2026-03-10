"use client"
import LoginForm from "../../components/forms/LoginForm"
import AuthLayout from "../AuthLayout"

export interface LogInData {
    email: string
    password: string
}
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>
export default function Page() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    )
}
