import axios from "axios"

const getPostRequests = async () => await axios.get('/posts');
const getOnePostRequests = async (id) => await axios.get(`/posts/${id}`);
const createPostRequests = async (post) => await axios.post('/posts', post);
const deletePostRequests = async (id) => await axios.delete(`/posts/${id}`);
const updatePostRequests = async (id, newFields) => await axios.put(`/posts/${id}`, newFields)

export {getPostRequests, createPostRequests, deletePostRequests, getOnePostRequests, updatePostRequests}