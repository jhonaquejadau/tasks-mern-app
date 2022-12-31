import React, {useContext} from "react";
import { PostContextConsumer } from "../context/PostsContext";
import {VscEmptyWindow} from "react-icons/vsc"
import {FaSadTear} from "react-icons/fa"

export const Posts = () => {
    const {posts} = useContext(PostContextConsumer);

    const postCards = posts.map(post => {
        return (
            <div key={post._id} className="flex flex-col justify-center items-center gap-4 text-white border-2 rounded my-2 p-2">
                <h2 className="text-[1.25rem] text-orange-600 font-bold text-center capitalize">{post.title}</h2>
                <p className="text-[1rem]">{post.description}</p>
            </div>
        )
    })

    if(posts.length === 0) return (
        <div className="flex flex-col justify-center items-center w-full h-full ">
            <VscEmptyWindow className="w-40 h-40 text-white"/>
            <div className="text-xl text-white flex items-center gap-4">
                <h1>Oooop... It seems like there are no posts yet!</h1>
                <FaSadTear/>
            </div>
        </div> 
    )

    return (
        <div >
            <p className="text-4xl">POSTS</p>
                {postCards}
        </div>
    )
}