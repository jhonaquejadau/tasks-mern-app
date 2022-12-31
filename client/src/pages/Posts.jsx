import React, {useContext} from "react";
import { PostContextConsumer } from "../context/PostsContext";

export const Posts = () => {
    const {posts} = useContext(PostContextConsumer);
    console.log( posts)
    return (
        <div >
            <p className="text-4xl">POSTS</p>
        </div>
    )
}