import jwt from "jsonwebtoken"
import "dotenv/config"
import { authControllData } from "./logIn"
interface authTokens extends Omit<authControllData, "user"> {}
export function generateJWT(id: string, email: string): authTokens {
    const tokenAccess = jwt.sign(
        {
            userId: id,
            email: email
        },
        process.env.JWT_SECRET_ACCESS!,
        {
            expiresIn: "15m"
        }
    )
    const tokenRefresh = jwt.sign(
        {
            userId: id,
            email: email
        },
        process.env.JWT_SECRET_REFRESH!,
        {
            expiresIn: "7d"
        }
    )
    return {
        tokenAccess: tokenAccess,
        tokenRefresh: tokenRefresh
    }
}
