"use client"
function Button({ text, bg, onClick, disabled }: { text: string; bg?: "main"; onClick?: () => void; disabled?: boolean }) {
    return (
        <>
            <button
                type="submit"
                disabled={disabled}
                className={`${bg === "main" ? "bg-font/10 hover:bg-font/5 active:bg-font/1 " : " "}  transition p-3 px-5 rounded-xl hover:text-font/90 active:text-font/70 cursor-pointer`}
            >
                {text}
            </button>
        </>
    )
}

export default Button
