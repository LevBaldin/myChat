function Button({ text, bg, onClick }: { text: string; bg?: "main"; onClick?: () => void }) {
    // async function handleClick(e: SubmitEvent) {
    //     // e.preventDefault()
    //     if (onClick) {
    //         const res = await onClick()
    //         console.log(res)
    //     }
    // }
    return (
        <>
            <button
                type="submit"
                // onClick={onClick}
                className={`${bg === "main" ? "bg-font/10 hover:bg-font/5 active:bg-font/1 " : " "} + transition p-3 px-5 rounded-xl hover:text-font/90 active:text-font/70 cursor-pointer`}
            >
                {text}
            </button>
        </>
    )
}

export default Button
