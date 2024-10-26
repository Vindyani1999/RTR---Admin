import React from "react";
import {
  Box,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material"; // Import necessary components
import CustomButton from "../../atoms/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify"; // Importing ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Importing the CSS for toast notifications

const NewAdmin: React.FC = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm password is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be only digits")
      .min(10, "Phone number should be at least 10 digits")
      .required("Phone number is required"),
    role: Yup.string().required("Role is required"), // Add validation for role
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      role: "", // Initialize role
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("New admin details:", values);
      // Handle form submission logic here

      // Simulating an API call and showing a success toast
      setTimeout(() => {
        toast.success("New admin created successfully!"); // Show success toast
      }, 500);
    },
  });

  return (
    <>
      <h2>Create New Admin</h2>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        p={3}
        sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 5 }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("firstName")}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("lastName")}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
          </Grid>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Role</InputLabel>
            <Select
              label="Role"
              {...formik.getFieldProps("role")}
              error={formik.touched.role && Boolean(formik.errors.role)}
            >
              <MenuItem value="Owner">Owner</MenuItem>
              <MenuItem value="Staff">Staff</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
            </Select>
            {formik.touched.role && formik.errors.role && (
              <div
                style={{
                  color: "#b9574c",
                  textAlign: "left",
                  fontSize: 13,
                  margin: 15,
                }}
              >
                {formik.errors.role}
              </div>
            )}
          </FormControl>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            {...formik.getFieldProps("confirmPassword")}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            sx={{ mt: 2 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            {...formik.getFieldProps("phoneNumber")}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            sx={{ mt: 2, mb: 2 }}
          />

          <CustomButton label="Create Admin" type="submit" />
        </form>
      </Box>
      <ToastContainer />{" "}
    </>
  );
};

export default NewAdmin;
