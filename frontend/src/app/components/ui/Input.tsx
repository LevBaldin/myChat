function Input({ type, placeholder, label }: { type: string; placeholder: string; label?: string }) {
    return (
        <div className={` text-xl ${label ? "justify-between " : "justify-center "}flex flex-col sm:flex-row gap-1 p-3 items-center`}>
            {label && (
                <label htmlFor="" className="hidden sm:block">
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className=" bg-font/10 hover:bg-accent/8 focus:outline-3 transition duration-100 outline-font-active backdrop-blur-3xl rounded-xl p-3"
            />
        </div>
    )
}

export default Input
