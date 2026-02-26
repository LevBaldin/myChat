function Button({ text, bg }: { text: string; bg?: "main" }) {
    return (
        <>
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault()
                }}
                className={`${bg === "main" ? "bg-font/10 hover:bg-font/5 active:bg-font/1 " : " "} + transition p-3 px-5 rounded-xl hover:text-font/90 active:text-font/70 cursor-pointer`}
            >
                {text}
            </button>
        </>
    )
}

export default Button
