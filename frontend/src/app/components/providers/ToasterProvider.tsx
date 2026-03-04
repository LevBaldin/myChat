"use client"
import { Toaster } from "react-hot-toast"

function ToasterProvider() {
    return (
        <>
            <Toaster
                toastOptions={{
                    duration: 1000,
                    style: {
                        border: "3px solid #00101f",
                        backgroundColor: "#deeefe",
                        padding: "16px",
                        color: "#00101f",
                        fontWeight: 500
                    },
                    iconTheme: {
                        primary: "#00101f",
                        secondary: "#deeefe"
                    }
                }}
            />
        </>
    )
}

export default ToasterProvider
