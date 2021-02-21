import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFieldUI from "../features/TextFieldUI";
import { Button, makeStyles, Paper } from "@material-ui/core";
import { formProps } from "../interface/global";

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
}));

interface submit {
  address: string;
  cardHolderName: string;
  cardNumber: string;
  cvv: string;
  ExpDate: string;
}

const schema = Yup.object().shape({
  address: Yup.string()
    .min(3, "Must be above 3 characters long")
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  cardHolderName: Yup.string()
    .min(3, "Must be above 3 characters long")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  cardNumber: Yup.string()
    .min(12, "Must be above 12 characters long")
    .required("Required"),
  cvv: Yup.string().required("Required"),
  ExpDate: Yup.date().required("Required"),
});

const Form2 = ({ handleNext, handleBack, setFormValues, preValues }: formProps) => {
  const classes = useStyles();
  const forSubmit = (values: submit): void => {
    setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      setFormValues({ ...preValues, ...values });
      handleNext();
    }, 400);
    // console.log(values);
  };

  const initialValues = {
    address: preValues.address || "",
    cardHolderName: preValues.cardHolderName || "",
    cardNumber: preValues.cardNumber || "",
    cvv: preValues.cvv || "",
    ExpDate: preValues.ExpDate ||"",
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
              <TextFieldUI label="Address" name="address" type="string" />
              <TextFieldUI
                label="Card Holder Name"
                name="cardHolderName"
                type="string"
              />
              <TextFieldUI
                label="Card Number"
                name="cardNumber"
                type="number"
              />
              <TextFieldUI label="CVV" name="cvv" type="number" />
              <TextFieldUI label="Expiry Date" name="ExpDate" type="date" />
              <Button
                // disabled={activeStep === 0}
                onClick={() => handleBack()}
                className={classes.backButton}
              >
                Back
              </Button>
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

export default Form2;
