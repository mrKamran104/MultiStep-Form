import React from "react";
import { Button, makeStyles, Paper } from "@material-ui/core";
import { lastFormProps } from "./../interface/global";

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
}));

const Form3 = ({ handleBack, formValues, handleNext }: lastFormProps) => {
  const classes = useStyles();
  const forSubmit = () => {
    setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      handleNext();
    }, 400);
    // console.log(values);
  };
  console.log(formValues);

  return (
    <div>
      <Paper className="paperStyle" elevation={3}>
        <table style={{ width: "100%", marginBottom: "10px" }}>
          <caption>
            <em>A test table with merged cells</em>
          </caption>
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{formValues.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{formValues.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{formValues.email}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{formValues.address}</td>
            </tr>
            <tr>
              <th>Card Holder Name</th>
              <td>{formValues.cardHolderName}</td>
            </tr>
            <tr>
              <th>Card Number</th>
              <td>{formValues.cardNumber}</td>
            </tr>
            <tr>
              <th>CVV</th>
              <td>{formValues.cvv}</td>
            </tr>
            <tr>
              <th>Expiry</th>
              <td>{formValues.ExpDate}</td>
            </tr>
          </tbody>
        </table>
        <Button
          // disabled={activeStep === 0}
          onClick={() => handleBack()}
          className={classes.backButton}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={forSubmit}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default Form3;
