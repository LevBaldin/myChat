function PromiseToaster({promise}:{promise:Promise<any>}) {
    toast.promise(
        `${promise}`, value, { withCredentials: true }),
                {
                    loading: "Loading",
                    success: (data) => `Welcome ${data.data.user.name}`,
                    error: (err) => err?.response?.data?.message || "Login failed"
                },
                {
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
                }
            )
                return <>
            </>;
}

export default PromiseToaster;