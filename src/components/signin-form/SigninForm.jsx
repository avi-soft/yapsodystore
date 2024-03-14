'use client'
import './style.css'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function FormSignin() {
    const initialValues = {};

    const validationSchema = Yup.object().shape({
        password: Yup.string().required("Please enter the field"),
        email: Yup.string().email("Enter a valid email address.").required("Please enter the field")
    })
    return (
        <div className='forminput1' style={{ paddingLeft: 20 }}>
            <Formik
                initialValues={initialValues}
                // onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="form-Container">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <label>Email Address </label>
                        <ErrorMessage   name="email" component='span-layout'/>
                    </div>
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="email"
                        type="email"
                        className="inputField"
                    />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <label>Password </label>
                        <ErrorMessage name="password" component="span-layout" />
                    </div>
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="password"
                        type="password"
                        className="inputField"
                    />
                </Form>
            </Formik>
        </div>
    )
}
