import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface UserData {
    user: {
        id: string
        name: string
        email: string
    } | null
    isAuth: boolean
}
const initialState: UserData = {
    user: null,
    isAuth: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<UserData>) => {
            state.user = action.payload.user
            state.isAuth = true
        },
        logOut: (state) => {
            state.user = null
            state.isAuth = false
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer
