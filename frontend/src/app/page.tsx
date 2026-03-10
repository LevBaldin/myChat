"use client"
import { logOut } from "@/store/authSlice"
import Link from "next/link"
import { useDispatch } from "react-redux"
export default function Home() {
    // const state = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()
    return (
        <>
            <h1>hello</h1>
            <Link href={"auth/login"}>
                <button>go to auth</button>
            </Link>
            <button onClick={() => dispatch(logOut())} className=" fixed top-20">
                logOut
            </button>
        </>
    )
}
