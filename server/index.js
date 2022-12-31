import { connectDB } from "./database.js";
import { PORT } from "./config.js";
import app from "./app.js";

// Our index.js just execute our code importing necessary files to work
connectDB();
app.listen(PORT)
console.log(`Server is running port ${PORT}`)