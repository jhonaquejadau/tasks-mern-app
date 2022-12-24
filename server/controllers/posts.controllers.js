// Functions to render requests in our server with error handlding
const getPost = (req, res) => {
    try {
        return res.send('GETTING POSTS')
    }catch (error){
        console.log(error)
        return error.message
    }
    
}
const createPost = (req, res) => {
    try {
        return res.send('CREATING POSTS')
    }catch (error){
        console.log(error)
        return error.message
    }

}
const updatePost = (req, res) => {
    try {
        return res.send('UPDATING POSTS')
    }catch (error){
        console.log(error)
        return error.message
    }

}
const deletePost = (req, res) => {
    try {
        return res.send('DELETING POSTS')
    }catch (error){
        console.log(error)
        return error.message
    }

}

export {getPost, createPost, updatePost, deletePost}