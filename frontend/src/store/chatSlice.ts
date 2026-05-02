import { Message } from "@/components/SelectionPanel"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface ChatInitialState {
    openedChat: string | null
    messages: Message[]
}
const initialState: ChatInitialState = {
    openedChat: null,
    messages: []
}
export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<ChatInitialState>) => {
            state.openedChat = action.payload.openedChat
            state.messages = action.payload.messages
            // state.isOpenedChat = true
        }
    }
})
export const { setMessages } = chatSlice.actions
export default chatSlice.reducer
