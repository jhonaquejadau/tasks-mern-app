import { Router } from "express";
import { createPost, deletePost, getPost, updatePost } from "../controllers/posts.controllers.js";

const router = Router();

// Get all posts
router.get('/posts', getPost)
// Get an unique post
router.get('/posts/:id',  getPost)
// Create a new post
router.post('/posts', createPost)
// Update existent post
router.put('/posts', updatePost)
// Delete selected post
router.delete('/posts', deletePost)

export default router