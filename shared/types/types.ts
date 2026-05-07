export interface LogInData {
    email: string
    password: string
}
export interface User {
    id: string
    email: string
    name: string
    avatar: string
}
export interface Message {
    id: string
    content: string
    chatId: string
    senderId: string
    createdAt: Date
}
export interface Chat {
    id: string
    participants: User[]
    messages: Message[]
}
