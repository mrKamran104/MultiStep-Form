import { Form, Formik } from "formik";
import React from "react";
import "./App.css";
import * as Yup from "yup";
import TextFieldUI from "./features/TextFieldUI";
import { Button, Paper } from "@material-ui/core";

interface submit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues = { firstName: "", lastName: "", email: "", password: "" };

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

function App() {
  const forSubmit = (values: submit): void => {
    alert(JSON.stringify(values, null, 2));
    // console.log(values);
  };

  return (
    <div className="App">
      <Paper className="paperStyle" elevation={3}>
        <Formik
          initialValues={initialValues}
          onSubmit={forSubmit}
          validationSchema={schema}
        >
          {({ dirty, isValid }) => (
            <Form>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextFieldUI label="First Name" name="firstName" />
                <TextFieldUI label="Last Name" name="lastName" />
              </div>
              <TextFieldUI label="Email" name="email" />
              <TextFieldUI label="Password" name="password" />
              <Button
                disabled={!dirty || !isValid}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
}

export default App;
