import express from "express"
import type { Application, Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import { createServer, Server as HTTPServer } from "http"
import { Server } from "socket.io"
import cookieParser from "cookie-parser"
// import router from "./routes/loginRoute"
import route from "./routes/loginRoute"
const app: Application = express()
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", route)
const server: HTTPServer = createServer(app)
const io: Server = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        // credentials: true,
        methods: ["GET", "POST"]
    }
})
io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`)
})

server.listen(5000, "localhost", () => {
    console.log("Server is working.")
})
