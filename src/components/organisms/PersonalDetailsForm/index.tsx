import React, { useEffect, useState } from "react";
import { Box, TextField, Grid } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import GradientButton from "../../atoms/GradientButton";
import { PersonalDetailsSubmitButtonStyle } from "./styles";

// Define Yup validation schema
const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?\d+$/, "Phone number must be a valid format "),
  address: yup.string().required("Address is required"),
  numberOfPeople: yup
    .number()
    .required("Number of people is required")
    .min(1, "At least one person is required"),
});

export interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  numberOfPeople: number;
}

interface PersonalDetailsFormProps {
  onPersonalDetailsSubmit: (details: FormData) => void;
  data: FormData;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  onPersonalDetailsSubmit,
  data,
}) => {
  const [formData, setFormData] = useState<FormData>(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Formik
        initialValues={formData}
        validationSchema={schema}
        onSubmit={(values) => {
          onPersonalDetailsSubmit(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Field name="firstName">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      value={values.firstName}
                      error={touched.firstName && !!errors.firstName}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="firstName" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="lastName">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      value={values.lastName}
                      error={touched.lastName && !!errors.lastName}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="lastName" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field name="phoneNumber">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      value={values.phoneNumber}
                      error={touched.phoneNumber && !!errors.phoneNumber}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="phoneNumber" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field name="numberOfPeople">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      label="Number of People"
                      variant="outlined"
                      value={values.numberOfPeople}
                      error={touched.numberOfPeople && !!errors.numberOfPeople}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="numberOfPeople" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name="address">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Address"
                      variant="outlined"
                      value={values.address}
                      error={touched.address && !!errors.address}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="address" />}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>

            <Box sx={PersonalDetailsSubmitButtonStyle}>
              <GradientButton
                label="Confirm Your Details"
                sx={{
                  mt: 2,
                }}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PersonalDetailsForm;
