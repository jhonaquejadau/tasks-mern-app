import React from "react";

export const PostCards = ({post}) => {
    return (
        <div className="flex flex-col items-center bg-[rgba(0,0,0,0.5)] text-center text-white text-[1rem] px-2 py-7">
            <h3 className="font-[600] text-slate-500 capitalize">{post.title}</h3>
            <p className="text-justify text-[200] mt-4 mb-8">{post.description}</p>
            <div className="flex flex-row justify-center gap-4">
                <button className="text-sm bg-gradient-to-r from-[#EC6F66] to-[#F3A183] rounded-sm px-2 py-1 hover:bg-gradient-to-l hover:scale-[1.04] capitalize">delete</button>
                <button className="text-sm bg-gradient-to-r from-[#7474BF] to-[#348AC7] rounded-sm px-2 py-1 hover:bg-gradient-to-l hover:scale-[1.04] capitalize">update</button>
            </div>
        </div>
    )
}