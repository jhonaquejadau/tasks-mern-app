import express from "express"
import postsRoutes from "./routes/posts.routes.js"

// Here we are just setting express framework to maintain our code more clean
const app = express();

// Middlewares... Using express.json() our backend can understand json data that our client is going to send us
app.use(express.json())

// Routes
app.use(postsRoutes)

export default app