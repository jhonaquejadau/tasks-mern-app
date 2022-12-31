import { useState } from "react";
import { useEffect } from "react";
import {createContext} from "react"
import {getPostRequests, createPostRequests} from "../api/postsconfig";

const PostContext = createContext();

const PostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await getPostRequests()
        setPosts(res.data)
    }

    const createPost = async (post) => {
        const res = await createPostRequests(post);
        console.log(res)
    }

    useEffect(() => {
        getPosts()
        createPost()
    }, [])

    return (
        <PostContext.Provider value={{posts}}>
            {children}
        </PostContext.Provider>
    )
} 

export {PostContextProvider, PostContext as PostContextConsumer}