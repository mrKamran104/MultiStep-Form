import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";

interface props {
  label: string;
  name: string;
  type: string | number | boolean | any;
}

const useStyles = makeStyles((theme) => ({
  helperText: {
    margin: theme.spacing(1), //4 etc
    color: "red",
  },
  //   error: {
  //     "&.MuiFormHelperText-root.Mui-error": {
  //       color: theme.palette.common.white,
  //     },
  //   },
}));

const TextFieldUI: React.FC<props> = ({ label, name, type }) => {
  const classes = useStyles();

  return (
    <div>
      <Field
        as={TextField}
        fullwidth="true"
        required
        type={type}
        name={name}
        label={label}
        variant="outlined"
        helperText={<ErrorMessage name={name} />}
        FormHelperTextProps={{ className: classes.helperText }}
      />
      {/* <TextField label="Outlined" variant="outlined" /> */}
    </div>
  );
};

export default TextFieldUI;
