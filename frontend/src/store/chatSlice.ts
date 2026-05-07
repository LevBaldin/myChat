import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IChat } from "../../../shared/types/types"
interface ChatInitialState {
    openedChat: string | null
    chat: Omit<IChat, "participants"> | null
}
const initialState: ChatInitialState = {
    openedChat: null,
    chat: null
}
export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<ChatInitialState>) => {
            state.openedChat = action.payload.openedChat
            state.chat = action.payload.chat
        }
    }
})
export const { setMessages } = chatSlice.actions
export default chatSlice.reducer
