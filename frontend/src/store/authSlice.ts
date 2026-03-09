import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { object } from "framer-motion/client"

// export interface AuthState {
//     value: UserData
// }
export interface UserData {
    user: {
        id: string
        name: string
        email: string
    } | null
    tokenAccess: string | null
    isAuth: boolean
}
const initialState: UserData = {
    user: null,
    tokenAccess: null,
    isAuth: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<UserData>) => {
            state.tokenAccess = action.payload.tokenAccess
            state.user = action.payload.user
            state.isAuth = true
        },
        logOut: (state) => {
            // state = { user: null, tokenAcces: null, isAuth: false }
            state.tokenAccess = null
            state.user = null
            state.isAuth = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer
