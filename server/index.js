import express from "express"
import postsRoutes from "./routes/posts.routes.js"
import { connectDB } from "./database.js";
import { PORT } from "./config.js";

const app = express();


connectDB();

app.use(postsRoutes)
app.use(express.json())
app.listen(PORT)
console.log(`Server is running port ${PORT}`)