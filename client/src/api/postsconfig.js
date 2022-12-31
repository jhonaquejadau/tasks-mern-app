import axios from "axios"

const getPostRequests = async () => await axios.get('/posts');
const createPostRequests = async (post) => await axios.post('/posts', post);
const deletePostRequests = async (id) => await axios.delete('/posts/' + id);
const getOnePostRequests = async (id) => await axios.get('/posts/' + id);

export {getPostRequests, createPostRequests, deletePostRequests, getOnePostRequests}