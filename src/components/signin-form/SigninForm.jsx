"use client";
import "./style.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function FormSignin() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Please enter the field"),
    email: Yup.string()
      .email("Enter a valid email address.")
      .required("Please enter the field"),
  });
  return (
    <div className="forminput1 " style={{marginTop:'40px'}}>
      <Formik
        initialValues={initialValues}
        // onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-Container">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label className="font-lato">Email Address </label>
            <ErrorMessage name="email" component="span-layout" />
          </div>
          <Field
            autoComplete="off"
            id="inputSigninForm"
            name="email"
            type="email"
            className="inputFieldSignin pointer-events-auto "
            onClick={(e) => e.stopPropagation()}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label className="font-lato">Password </label>
            <ErrorMessage name="password" component="span-layout" />
          </div>
          <Field
            autoComplete="off"
            id="inputSigninPassword "
            name="password"
            type="password"
            className="inputFieldSignin pointer-events-auto "
            onClick={(e) => e.stopPropagation()}
          />
        </Form>
      </Formik>
    </div>
  );
}
