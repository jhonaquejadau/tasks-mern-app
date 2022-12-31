import { useState } from "react";
import {createContext} from "react"

const PostContext = createContext();

const PostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    return (
        <PostContext.Provider value={{posts, setPosts}}>
            {children}
        </PostContext.Provider>
    )
} 

export {PostContextProvider, PostContext as PostContextConsumer}