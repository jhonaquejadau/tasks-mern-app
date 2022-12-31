import React from "react";
import {Formik, Form, Field} from "formik"

export const PostForm = () => {
    return (
        <div>
            <Formik initialValues={{
                title: "",
                description: ""
            }}>
                {({handleSubmit}) => {
                    <Form onSubmit={handleSubmit}>
                        <Field name="title" placeholder="Title"/>
                        <Field name="description" placeholder="Description"/>
                        <button type="submit">Save Post</button>
                    </Form>
                }}
            </Formik>
        </div>
    )
}