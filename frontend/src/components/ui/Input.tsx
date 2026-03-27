"use client"

import { SetState } from "@/app/auth/login/page"
export interface InputProps<T> {
    type: string
    id: string
    placeholder?: string
    label?: string
    setValue: SetState<T>
    value?: string
    required?: boolean
}
function Input<T>({ type, id, placeholder, label, setValue, value, required = true }: InputProps<T>) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setValue((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    return (
        <div className={` text-xl ${label ? "justify-between " : "justify-center "} flex flex-col shrink gap-1 p-2 items-center `}>
            {label && (
                <label htmlFor="" className="hidden sm:block self-start text-sm">
                    {label}
                </label>
            )}

            <input
                required={required}
                onChange={handleChange}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                className="justify-self-center bg-font/10 hover:bg-accent/8 p-2 rounded-md outline-font-active focus:outline-3 invalid:outline-orange-800 w-full text-md transition duration-100 shrink"
            />
        </div>
    )
}

export default Input
