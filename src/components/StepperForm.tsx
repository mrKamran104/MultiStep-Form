import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Form1 from "../forms/Form1";
import Form2 from "../forms/Form2";
import Form3 from "../forms/Form3";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Personal Details", "Payment Details", "Review"];
}

function getStepContent(
  stepIndex: number,
  formValues: object,
  setFormValues: Function,
  handleNext: Function,
  handleBack: Function
) {
  switch (stepIndex) {
    case 0:
      return (
        <Form1
          preValues={formValues}
          setFormValues={setFormValues}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 1:
      return (
        <Form2
          preValues={formValues}
          setFormValues={setFormValues}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 2:
      return (
        <Form3
          formValues={formValues}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function StepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setFormValues({});
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(
              activeStep,
              formValues,
              setFormValues,
              handleNext,
              handleBack
            )}
            {/* <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
