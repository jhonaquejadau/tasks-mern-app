import React, {useContext} from "react";
import toast from "react-hot-toast"

import { PostContextConsumer } from "../context/PostsContext";

export const PostCards = ({post}) => {

    const {deletePost} = useContext(PostContextConsumer);

    const handleDelete = (postId) => {
        toast((t) => (
            <div className="flex flex-col justify-center items-center gap-4 text-white">
                <p>Do you want to delete post ? <strong>{postId}</strong> </p>
                <div className="flex flex-row jsutify-center items-center gap-4 mx-auto">
                    <button onClick={ () => {
                            deletePost(postId)
                            toast.dismiss(t.id)
                        }} 
                        className="text-sm px-6 py-1 rounded-sm bg-gradient-to-r from-[#EC6F66] to-[#F3A183] capitalize">delete</button>
                    <button onClick={() => toast.dismiss(t.id)} className="text-sm px-6 py-1 rounded-sm bg-slate-500 hover:bg-slate-400 capitalize">cancel</button>
                </div>
            </div>
        ), {
            style:{
                background: "#182848",
                border: "2px solid white"
            }
        });
    };

    return (
        <div className="flex flex-col items-center bg-[rgba(0,0,0,0.5)] text-center text-white text-[1rem] px-4 py-7 hover:scale-[1.01] hover:bg-[rgba(0,0,0,0.4)]">
            <h3 className="font-[600] text-slate-500 capitalize">{post.title}</h3>
            <span className="w-[80%] h-[1px] bg-slate-400"></span>
            <p className="text-justify text-[200] mt-4 mb-8">{post.description}</p>
            <div className="flex flex-row justify-center gap-4">
                <button onClick={() => handleDelete(post._id)} className="text-sm bg-gradient-to-r from-[#EC6F66] to-[#F3A183] rounded-sm px-2 py-1 hover:bg-gradient-to-l hover:scale-[1.04] capitalize">delete</button>
                <button className="text-sm bg-gradient-to-r from-[#7474BF] to-[#348AC7] rounded-sm px-2 py-1 hover:bg-gradient-to-l hover:scale-[1.04] capitalize">update</button>
            </div>
        </div>
    )
}