import { Router } from "express"
import { loginController } from "../controllers/logInControll"
import { signUpController } from "../controllers/signUpControll"
const router = Router()
router.post("/login", loginController)
router.post("/signup", signUpController)
export default router
