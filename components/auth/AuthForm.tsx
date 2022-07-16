import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const initValues = { email: "", password: "" };

const AuthForm = () => {
  function submitHandler() {
    console.log("Sent");
  }

  return (
    <Formik
      initialValues={initValues}
      validateOnChange
      validateOnBlur
      onSubmit={submitHandler}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        rowSpacing={2}
        component={Form}
      >
        <Field
          name="email"
          placeholder="Email"
          as={(props) => (
            <Grid item>
              <TextField variant="standard" {...props} />
            </Grid>
          )}
          validate={(value: string) => {
            let error = "";
            console.log("i work");
            if (!value.includes("@") || !value.includes(".")) {
              error = "Enter a valid email";
            }

            return error;
          }}
        ></Field>
        <ErrorMessage name="email" />
        <Field
          name="password"
          placeholder="Password"
          validate={(value: string) => {
            let error = "";
            if (value.length < 5) {
              error = "Password length must be at least 5 chars";
            }
            return error;
          }}
          as={(props) => (
            <Grid item>
              <TextField variant="standard" {...props} />
            </Grid>
          )}
        ></Field>
        <ErrorMessage name="password" />
      </Grid>
    </Formik>
  );
};

export default AuthForm;
