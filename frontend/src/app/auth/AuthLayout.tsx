"use client"
import { motion } from "framer-motion"
import { appearance, slideUp } from "../lib/animations"
import ToasterProvider from "../components/providers/ToasterProvider"

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="min-h-screen min-w-screen flex justify-self-center justify-center items-center">
            <ToasterProvider />
            <motion.div
                variants={appearance}
                initial="hidden"
                animate="visible"
                className="flex justify-evenly shadow-accent/10 backdrop-blur-xl gap-5 flex-col bg-font/5 opacity-1 border-3 border-font/1 items-center w-4/5 h-[80vh] p-5  shadow-xl rounded-4xl "
            >
                <div>
                    <motion.h1 variants={slideUp} initial="down" animate="up" className="text-4xl font-extrabold ">
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
