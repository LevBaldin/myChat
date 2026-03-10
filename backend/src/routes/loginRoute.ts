import { Router } from "express"
import { loginController } from "../controllers/logInControll"
import { signUpController } from "../controllers/signUpControll"
const router = Router()
router.post("/login", loginController)
export default router
router.post("/signup", signUpController)
