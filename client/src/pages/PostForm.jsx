import React, {useContext, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContextConsumer } from "../context/PostsContext";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import { useEffect } from "react";

export const PostForm = () => {
    
    const {createPost, getOnePost} = useContext(PostContextConsumer);
    const [post, setPost] = useState({
        title: '',
        description:''
    })
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if(params.id){
                const updatedPost = await getOnePost(params.id)
                console.log(updatedPost)
                setPost(updatedPost)
            }
        })();
    }, [])

    console.log('post')
    console.log(post)
    return (
        <div className="flex flex-col justify-center items-center gap-10 w-full min-h-screen text-white border-2">
            <div className="w-[60%] h-[80%] rounded bg-[rgba(0,0,0,0.3)] flex flex-col items-center px-4 py-7 gap-4">
                <h1 className="text-[2rem] capitalize -mb-2 text-slate-500">post formulary</h1>
                <span className="w-full h-[1px] bg-slate-500"></span>
                <Formik initialValues={post}
                    validationSchema={Yup.object({
                        title: Yup.string().required('Title is required'),
                        description: Yup.string().required('Description is required')
                    })}
                    onSubmit={async (values, actions) => {
                        await createPost(values);
                        navigate('/')
                    }}
                    enableReinitialize
                >
                    {({handleSubmit}) => (
                        <Form onSubmit={handleSubmit} className="w-full flex flex-col justify-center">
                            <label htmlFor="title" className="text-slate-500 block capitalize">title</label>
                            <Field className="text-white bg-[rgba(0,0,0,0.5)] px-2 py-2" name="title" placeholder="Title"/>
                            <ErrorMessage component="p" className="text-red-500" name="title"/>

                            <label htmlFor="description" className="mt-2 text-slate-500 block focus:outline-none capitalize">description</label>
                            <Field component="textarea" rows={3} className="text-white bg-[rgba(0,0,0,0.5)] px-2 py-2" name="description" placeholder="Description"/>
                            <ErrorMessage component="p" className="text-red-500" name="description"/>
                            
                            <button type="submit" className="px-4 py-2 mt-4 rounded-sm bg-gradient-to-r from-[#1CD8D2] to-[#93EDC7]">Save Post</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}