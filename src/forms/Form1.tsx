import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFieldUI from "../features/TextFieldUI";
import { Button, Paper } from "@material-ui/core";
import { formProps } from "../interface/global";

interface submit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// const initialValues = { firstName: "", lastName: "", email: "", password: "" };

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Must be above 3 characters long")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Must be above 3 characters long")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be above 6 characters long")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});

const Form1 = ({ setFormValues, preValues, handleNext, handleBack }: formProps) => {
  const forSubmit = (values: submit): void => {
    setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      setFormValues({...preValues, ...values });
      handleNext();
      //   setSubmitting(true)
    }, 400);
    // console.log(values);
  };

  const initialValues = {
    firstName: preValues.firstName || "",
    lastName: preValues.lastName || "",
    email: preValues.email || "",
    password: preValues.password || "",
  };

  return (
    <div>
      <Paper className="paperStyle" elevation={3}>
        <Formik
          initialValues={initialValues}
          onSubmit={forSubmit}
          validationSchema={schema}
        >
          {({ dirty, isValid }) => (
            <Form>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextFieldUI
                  label="First Name"
                  name="firstName"
                  type="string"
                />
                <TextFieldUI label="Last Name" name="lastName" type="string" />
              </div>
              <TextFieldUI label="Email" name="email" type="email" />
              <TextFieldUI label="Password" name="password" type="password" />
              <Button
                // disabled={!dirty || !isValid}
                type="submit"
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export default Form1;
