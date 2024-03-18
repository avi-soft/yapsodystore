import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function ChatFormPage() {
    const initialValues = {}

    const validationSchema = Yup.object().shape({
        phone: Yup.number().typeError("Enter a valid phone number.").required("Phone number is required."),
        email: Yup.string().email("Enter a valid email address.").required("Email is required.")
    })
    return (
        <>
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
                    <ErrorMessage name="email" component="span-text" />
                    <label>Phone Number </label>
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="phone"
                        type="tel"
                        className="inputField"

                    />
                    <ErrorMessage name="phone" component="span-text" />
                    <label>Message </label>
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="message"
                        className="inputCreatePost messageField"
                    />
                </Form>
            </Formik>
        </>

    )
}