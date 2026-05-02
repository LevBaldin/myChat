import { Router } from "express"
import { getDataByTokenRefresh } from "../controllers/auth/getDataByTokenRefresh"
import { findUsersByNameControll } from "../controllers/findUsersControll"
import { getChatsControll } from "../controllers/getChatsControll"
// import { getMessages } from "../services/getMessages"
import { getMessagesControll } from "../controllers/getMessages"
const privRoute = Router()
privRoute.get("/userdata", getDataByTokenRefresh)
privRoute.get("/users", findUsersByNameControll)
privRoute.get("/chats", getChatsControll)
privRoute.get("/messages", getMessagesControll)
export default privRoute
