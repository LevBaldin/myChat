"use client"
import { Provider } from "react-redux"
import { store } from "../../../store/store"
function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
