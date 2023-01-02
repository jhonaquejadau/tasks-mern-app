import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { PostContextConsumer } from "../context/PostsContext";
import { PostCards } from "../components/PostsCards";

import {VscEmptyWindow} from "react-icons/vsc"
import {FaSadTear} from "react-icons/fa"

export const Posts = () => {
    const {posts} = useContext(PostContextConsumer);

    if(posts.length === 0) return (
        <div className="flex flex-col justify-center items-center w-full h-full ">
            <VscEmptyWindow className="w-40 h-40 text-white"/>
            <div className="text-xl text-white flex items-center gap-4">
                <h1>Oooop... It seems like there are no posts yet!</h1>
                <FaSadTear/>
            </div>
            <Link to="/post-form">
                <button className="my-8 text-sm capitalize rounded px-2 py-1 bg-gradient-to-r from-[#5f2c82] to-[#49a09d] hover:bg-gradient-to-l hover:scale-[1.04]">create post</button>
            </Link>
        </div> 
    )

    return (
        <div className=" min-h-screen w-full flex flex-col items-center border-2 text-white">
            <p className="text-4xl">CRUD Taks Application</p>
            <Link to="/post-form">
                <button className="my-8 text-sm capitalize rounded px-2 py-1 bg-gradient-to-r from-[#5f2c82] to-[#49a09d] hover:bg-gradient-to-l hover:scale-[1.04]">create new post</button>
            </Link>
            
            <div className="w-[80%] h-[80%] grid grid-cols-3 gap-2">
                {
                    posts.map((post, index) => (
                        <PostCards post={post} index={index} key={post._id}/>
                    ))
                }
            </div>
        </div>
    )
}