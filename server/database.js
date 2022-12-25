import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js";

// connect method allows us to create a connection with our mongo database
export async function connectDB() {
    try{
        mongoose.set('strictQuery', false);
        const db = await mongoose.connect(MONGODB_URI)
        console.log('Connected to ', db.connection.name)
    } catch(error){
        console.error(error)
    }   
} 