import axiosInstance from "./axiosInstance"
import axios from "axios"

axiosInstance.interceptors.response.use(
    function onFulfilled(response) {
        return response
    },
    async function onRejected(error) {
        const originalRequest = error.config
        if (!originalRequest._retry && error.response?.status === 401) {
            originalRequest._retry = true
            try {
                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/refresh`, {}, { withCredentials: true })
                return axiosInstance(originalRequest)
            } catch (error) {
                console.log(error)
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
