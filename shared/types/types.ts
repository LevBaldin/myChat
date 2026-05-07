export interface LogInData {
    email: string
    password: string
}
export interface IUser {
    id: string
    email: string
    name: string
    avatar: string
}
export interface IMessage {
    id: string
    content: string
    chatId: string
    senderId: string
    createdAt: Date
}
export interface IChat {
    id: string
    participants: IUser[]
    messages: IMessage[]
}
