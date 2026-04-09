"use client"
import { motion } from "framer-motion"
import { appearance, slideUp } from "../lib/animations"

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex justify-center justify-self-center items-center min-w-screen min-h-screen">
            <motion.div
                variants={appearance}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-evenly items-center gap-5 bg-font/5 opacity-1 shadow-accent/10 shadow-xl backdrop-blur-xl p-3 border-3 border-font/1 rounded-4xl w-4/5 min-h-[80vh]"
            >
                <div>
                    <motion.h1 variants={slideUp} initial="down" animate="up" className="font-extrabold text-4xl">
                        Welcome to my chat!
                    </motion.h1>
                    <motion.h2 variants={slideUp} initial="down" animate="up" className="">
                        please, log in or sign up
                    </motion.h2>
                </div>
                {children}
            </motion.div>
        </div>
    )
}

export default AuthLayout
