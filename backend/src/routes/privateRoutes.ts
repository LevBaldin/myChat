import { Router } from "express"
import { getDataByTokenRefresh } from "../controllers/auth/getDataByTokenRefresh"
import { findUsersByNameControll } from "../controllers/findUsersControll"

const privRoute = Router()
privRoute.get("/userdata", getDataByTokenRefresh)
privRoute.get("/users", findUsersByNameControll)
export default privRoute
