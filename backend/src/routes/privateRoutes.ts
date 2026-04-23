import { Router } from "express"
import { getDataByTokenRefresh } from "../controllers/auth/getDataByTokenRefresh"

const privRoute = Router()
privRoute.get("/userdata", getDataByTokenRefresh)
export default privRoute
