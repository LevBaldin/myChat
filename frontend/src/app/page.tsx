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
