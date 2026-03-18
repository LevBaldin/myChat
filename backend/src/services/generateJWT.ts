import jwt from "jsonwebtoken"
import "dotenv/config"
export function generateJWT(id: string, email: string) {
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
