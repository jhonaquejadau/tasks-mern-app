import Post from "../models/Post.js"


// Functions to render requests in our server with error handlding
/* Concepts
* req.body ---> all data that our client send us
*/
const getPost = async (req, res) => {
    
    try {
        const posts = await Post.find(); 
        
        return res.send(posts)
    }catch (error){
        return res.status(500).json({message: error.message})
    }
}

const getOnePost = async (req, res) => {
    
    try{
        const onePost = await Post.findById(req.params.id)
        
        return onePost ? res.json(onePost) : res.sendStatus(404);
    }catch(error) {
        return res.status(500).json({message: error.message})
    }
}

const createPost = async (req, res) => {

    try {
        // Here we destructure our req.body with the data that our client is going to send
        const {title, description} = req.body;
        const newPost = new Post({title, description}) 
        await newPost.save()
        
        return res.json(newPost)
    }catch (error){
        return res.status(500).json({message: error.message})
    }
    
}
const updatePost = async (req, res) => {
    
    try {
        // We need to receive the id because the client can update title or description or both of them.
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        return res.send(updatedPost)
    }catch (error){
        return res.status(500).json({message: error.message})
    }
}
const deletePost = async (req, res) => {
    try {
        // We can do the same that we did in updatedPost function here in deletePost, just change property findByIdAndUpdate to findByIdAndRemove
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        
        return deletedPost ? res.sendStatus(204) : res.sendStatus(404)
    }catch (error){
        return res.status(500).json({message: error.message})
    }
}

export {getPost, getOnePost, createPost, updatePost, deletePost}