import { Router } from "express";
import { createPost, deletePost, getPost, getOnePost, updatePost } from "../controllers/posts.controllers.js";

const router = Router();

// Get all posts
router.get('/posts', getPost)
// Get an unique post
router.get('/posts/:id', getOnePost)
// Create a new post
router.post('/posts', createPost)
// Update existent post
router.put('/posts/:id', updatePost)
// Delete selected post
router.delete('/posts/:id', deletePost)

export default router