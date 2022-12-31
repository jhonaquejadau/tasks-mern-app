import { useState } from "react";
import { useEffect } from "react";
import {createContext} from "react"
import {getPostRequests, createPostRequests, deletePostRequests, getOnePostRequests} from "../api/postsconfig";

const PostContext = createContext();

const PostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await getPostRequests()
        setPosts(res.data)
    }

    const createPost = async (post) => {
        const res = await createPostRequests(post);
        setPosts([...posts, res.data])
    }

    const deletePost = async (id) => {
        const res = await deletePostRequests(id)
        res.status === 204 && setPosts(posts.filter(post => post._id !== id))
    }

    const getOnePost = async (id) => {
        const res = await getOnePostRequests(id)
        console.log(res)
    } 

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <PostContext.Provider value={{posts, getPosts, createPost, deletePost, getOnePost}}>
            {children}
        </PostContext.Provider>
    )
} 

export {PostContextProvider, PostContext as PostContextConsumer}