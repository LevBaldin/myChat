"use client"

import { LogInData, SetState } from "@/app/auth/page"
export interface InputT<T> {
    type: string
    id: string
    placeholder?: string
    label?: string
    setValue: SetState<T>
    value?: string
}
function Input<T>({ type, id, placeholder, label, setValue, value }: InputT<T>) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setValue((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    return (
        <div className={` text-xl ${label ? "justify-between " : "justify-center "}flex flex-col sm:flex-row gap-1 p-3 items-center`}>
            {label && (
                <label htmlFor="" className="hidden sm:block">
                    {label}
                </label>
            )}
            <input
                required
                onChange={handleChange}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                className=" bg-font/10 hover:bg-accent/8 focus:outline-3 transition duration-100 outline-font-active backdrop-blur-3xl rounded-xl p-3"
            />
        </div>
    )
}

export default Input
