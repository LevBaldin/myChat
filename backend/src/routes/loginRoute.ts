import { Router } from "express"
import { loginController } from "../controllers/logInControll"
const router = Router()
router.post("/login", loginController)
export default router
