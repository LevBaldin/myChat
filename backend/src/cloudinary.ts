import { v2 as cloudinary } from "cloudinary"
import multer from "multer"

cloudinary.config({
    cloudinary_url: process.env.CLOUDINARY_URL
})

const storage = multer.memoryStorage()
export const upload = multer({ storage })

export default cloudinary
