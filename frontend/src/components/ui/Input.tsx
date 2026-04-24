"use client"

import { SetState } from "@/app/auth/login/page"
import Image from "next/image"
import Cross from "../../../public/cross.svg"
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
    function clearInput() {
        setValue((prev) => ({
            ...prev,
            [id]: ""
        }))
    }
    return (
        <div className={` text-xl ${label ? "justify-between " : "justify-center "} flex flex-col shrink gap-1 p-2 items-center `}>
            {label && (
                <label htmlFor="" className="hidden sm:block self-start text-sm">
                    {label}
                </label>
            )}
            <div className="flex justify-between justify-self-center bg-font/10 hover:bg-accent/8 pr-2 rounded-md outline-font-active focus-within:outline-3 has-invalid:outline-orange-800 w-full text-md transition duration-100">
                <input
                    required={required}
                    onChange={handleChange}
                    type={type}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    className="p-2 rounded-md outline-none w-full transition caret-font"
                />
                {value && (
                    <button type="button" onClick={clearInput}>
                        <Image
                            className="hover:opacity-80 hover:scale-110 transition cursor-pointer"
                            src={Cross}
                            width={20}
                            height={20}
                            alt="Clear input button"
                        />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Input
