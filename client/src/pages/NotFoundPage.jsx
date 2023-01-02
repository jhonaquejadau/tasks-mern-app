import React from "react";

export const NotFoundPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center text-[4rem] text-white border-2">
            <p>NOT FOUND PAGE</p>
            <p className="font-bold text-[6rem] text-slate-500 animate-pulse">404</p>
            <p className="text-[1rem]">Valid endpoints: /, /post-form, /posts/:id</p>
        </div>
    )
}