"use client"
function Button({
    children,
    onClick,
    bg,
    type = "submit",
    disabled
}: {
    children: React.ReactNode
    onClick?: () => unknown
    bg?: "main"
    type?: "submit" | "reset" | "button"
    disabled?: boolean
}) {
    return (
        <>
            <button
                onClick={onClick}
                type={type}
                disabled={disabled}
                className={`${bg === "main" ? "bg-font/10 hover:bg-font/5 active:bg-font/1 " : " "}  transition disabled:text-font-active disabled:bg-primary p-3 px-5 rounded-xl hover:text-font/90 active:text-font/70 cursor-pointer`}
            >
                {children}
            </button>
        </>
    )
}

export default Button
