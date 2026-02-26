import express, { Application, Request, Response } from "express"
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

server.listen(5000, () => {
    console.log("Server is working.")
})
