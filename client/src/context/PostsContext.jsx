import { useState } from "react";
import { useEffect } from "react";
import {createContext} from "react"
import { getPostRequests } from "../api/postsconfig";

const PostContext = createContext();

const PostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await getPostRequests()
        setPosts(res.data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <PostContext.Provider value={{posts}}>
            {children}
        </PostContext.Provider>
    )
} 

export {PostContextProvider, PostContext as PostContextConsumer}