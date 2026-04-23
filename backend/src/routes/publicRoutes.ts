import { Router } from "express"
import { loginController } from "../controllers/auth/logInControll"
import { signUpController } from "../controllers/auth/signUpControll"
import { logOutController } from "../controllers/auth/logOutControll"
import { refresh } from "../controllers/auth/authControll"
const router = Router()
router.post("/login", loginController)
router.post("/signup", signUpController)
router.post("/logout", logOutController)
router.post("/refresh", refresh)
export default router
