import express from "express"
import type { Application, Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import { createServer, Server as HTTPServer } from "http"
import { Server } from "socket.io"
import cookieParser from "cookie-parser"
import route from "./routes/publicRoutes"
import { authMiddleware } from "./middlewares/authMiddleware"
import privRoute from "./routes/privateRoutes"
const app: Application = express()
const corsConfig = {
    origin: "http://localhost:4000",
    credentials: true
}
app.options("/", cors(corsConfig))
app.use(cors(corsConfig))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", route)
app.use(authMiddleware)
app.use("/api", privRoute)

const server: HTTPServer = createServer(app)
const io: Server = new Server(server, {
    cors: {
        origin: "http://localhost:4000",
        methods: ["GET", "POST"]
    }
})
io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`)
    socket.on("abs", (data) => {
        console.log("abracadabra " + data)
    })
})

server.listen(5000, "localhost", () => {
    console.log("Server is working.")
})
