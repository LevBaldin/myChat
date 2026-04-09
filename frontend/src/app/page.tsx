"use client"
import { RootState } from "@/store/store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"
export default function Home() {
    const router = useRouter()
    const isLoggedIn = useSelector((state: RootState) => state.auth.isAuth)
    useEffect(() => {
        if (isLoggedIn) router.replace("/home")
    }, [isLoggedIn, router])
    return (
        <>
            <Link href={"auth/login"}>go to login</Link>
        </>
    )
}
