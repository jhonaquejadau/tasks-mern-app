import express from "express"
import postsRoutes from "./routes/posts.routes.js"
import {dirname, join} from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Here we are just setting express framework to maintain our code more clean
const app = express();

// Middlewares... Using express.json() our backend can understand json data that our client is going to send us
app.use(express.json())

// Routes
app.use(postsRoutes)

// Asbolute route
// console.log(__dirname)
app.use(express.static(join(__dirname, '/../client/build')))
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '/../client/build/index.html'))
})

export default app