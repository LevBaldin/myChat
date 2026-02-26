import Image from "next/image"
import { Redirect } from "next"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"
export default function Home() {
    return (
        <>
            <h1>hello</h1>
            <Link href={"auth"}>
                <button>go to auth</button>
            </Link>
        </>
    )
}
