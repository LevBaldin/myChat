import { Variants } from "framer-motion"

export const appearance: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.1
        }
    }
}
export const slideUp: Variants = {
    down: { y: 30, opacity: 0 },
    up: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.6
        }
    }
}
