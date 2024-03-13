import React from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css'
const page = ({onClose}) => {
    const initialValues = {}

    const validationSchema = Yup.object().shape({
        phone: Yup.number().typeError("Enter a valid phone number.").required("Phone number is required."),
        email: Yup.string().email("Enter a valid email address.").required("Email is required.")
    })
    
    const handleLineClick =()=>{
        onClose();
    }
    return (
        <div className='chat'>
            <div className='chat-text'>
                <div style={{ justifyContent: 'center', display: 'flex', flex: 85, alignItems: 'center', marginLeft: 31 }}>Chat with us</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 15 }}>
                    <div className='horizontal-line' onClick={handleLineClick}><hr /></div>
                </div>
            </div>
            <div className='sagar'>
                <div style={{ marginLeft: 24 }}>
                    <p style={{ marginBottom: 0 }}>{`By submitting your information, you consent to Yapsody's Privacy Policy. In order to serve you better, transmission and storage of this communication is provided by the #1 chat app`}</p>
                    <Link href='https://www.zendesk.com/in/#'>Zendesk.com</Link>
                </div>

                <div className='form-input'>
                    <Formik
                        initialValues={initialValues}
                        // onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form className="formContainer">
                            <label>Name </label>
                            <ErrorMessage name="name" component="span" />
                            <Field
                                autocomplete="off"
                                id="inputCreatePost"
                                name="name"

                            />
                            <label>Email </label>
                            <Field
                                autocomplete="off"
                                id="inputCreatePost"
                                name="email"
                                type="email"
                                className="inputField"

                            />
                            <ErrorMessage name="email" component="span" />
                            <label>Phone Number </label>
                            <Field
                                autocomplete="off"
                                id="inputCreatePost"
                                name="phone"
                                type="tel"
                                className="inputField"

                            />
                            <ErrorMessage name="phone" component="span" />
                            <label>Message </label>
                            <ErrorMessage name="message" component="span" />
                            <Field
                                autocomplete="off"
                                id="inputCreatePost"
                                name="message"
                                className="inputCreatePost messageField"
                            />
                        </Form>
                    </Formik>
                </div>
            </div>
            <div className='footer'>
                <button>Start Chat</button>

            </div>
        </div>
    )
}

export default page
