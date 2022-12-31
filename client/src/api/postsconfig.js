import axios from "axios"

const getPostRequests = async () => await axios.get('/posts')
const createPostRequests = async (post) => await axios.post('/posts', post)

export {getPostRequests, createPostRequests}