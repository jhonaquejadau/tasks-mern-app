import axios from "axios"

const getPostRequests = async () => await axios.get('/posts')
const getOnePostRequests = async () => await axios.get('/posts/:id')
const putPostRequests = async () => await axios.put('/posts/:id')
const pullPostRequests = async () => await axios.pull('/posts/:id')
const deletePostRequests = async () => await axios.delete('/posts/:id')

export {getPostRequests, getOnePostRequests, putPostRequests, pullPostRequests, deletePostRequests}