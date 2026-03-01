import express from "express"
import type { Application, Request, Response } from "express"
import cors from "cors"
import { createServer, Server as HTTPServer } from "http"
import { Server } from "socket.io"
const app: Application = express()
app.use(cors())
const server: HTTPServer = createServer(app)
const io: Server = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})
io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`)
})
// app.get((req, res) => {
//     res.send("<p>dsflsdkfjsdlfkj</p>")
// })
server.listen(5000, "localhost", () => {
    console.log("Server is working.")
})
