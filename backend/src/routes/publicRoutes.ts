import { Router } from "express"
import { loginController } from "../controllers/logInControll"
import { signUpController } from "../controllers/signUpControll"
import { logOutController } from "../controllers/logOutControll"
import { refresh } from "../controllers/authControll"
const router = Router()
router.post("/login", loginController)
router.post("/signup", signUpController)
router.post("/logout", logOutController)
router.post("/refresh", refresh)
export default router
