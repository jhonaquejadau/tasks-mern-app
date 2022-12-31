import mongoose from "mongoose";

// Creating schema for standarize our data
const postSchema = new mongoose.Schema({
    title:{type:String, required: true, trim: true},
    description:{type:String, required: true, trim: true}
})

export default mongoose.model('Post', postSchema)