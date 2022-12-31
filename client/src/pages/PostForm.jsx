import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"


import { PostContextConsumer } from "../context/PostsContext";

export const PostForm = () => {
    
    const {createPost} = useContext(PostContextConsumer);
    const navigate = useNavigate();

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