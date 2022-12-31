import React, {useContext, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContextConsumer } from "../context/PostsContext";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import { useEffect } from "react";

export const PostForm = () => {
    
    const {createPost, getOnePost} = useContext(PostContextConsumer);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(params.id){
            getOnePost(params.id)
        }
    }, [])

    return (
        <div className="w-full min-h-screen bg-orange-500">
            MY FORM
            <Formik initialValues={{
                title: "",
                description: ""
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('Title is required'),
                description: Yup.string().required('Description is required')
            })}
            onSubmit={async (values, actions) => {
                await createPost(values);
                navigate('/')
            }}
        >
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <Field name="title" placeholder="Title"/>
                        <ErrorMessage component="p" className="text-red-500" name="title"/>
                        <Field name="description" placeholder="Description"/>
                        <ErrorMessage component="p" className="text-red-500" name="description"/>
                        <button type="submit">Save Post</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}