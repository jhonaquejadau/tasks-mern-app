import dotenv from "dotenv"
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/postsdb"
const PORT = process.env.PORT || 4000

export {MONGODB_URI, PORT}