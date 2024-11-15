import React from "react";
import {
  Box,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import CustomButton from "../../atoms/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { createAdminAction } from "../../../redux/action/adminAction";
import { resetAdminState } from "../../../redux/slice/adminSlice";

const NewAdmin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, success } = useSelector(
    (state: RootState) => state.admin
  );

  React.useEffect(() => {
    if (success) {
      toast.success("New admin created successfully!");
      dispatch(resetAdminState());
      formik.resetForm();
    } else if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [success, error, dispatch]);

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
    role: Yup.string().required("Role is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      role: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Remove confirmPassword before submitting the data
      const { confirmPassword, ...dataToSubmit } = values;
      dispatch(createAdminAction(dataToSubmit));
      console.log("Form data:", dataToSubmit);
    },
  });

  return (
    <>
      <Typography sx={{ fontSize: 24, fontWeight: 700, ml: 3, mt: 1.5 }}>
        Create New Admin
      </Typography>
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
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="staff">Staff</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
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

          <CustomButton
            label={isLoading ? "Creating..." : "Create Admin"}
            type="submit"
            disabled={isLoading}
          />
        </form>
      </Box>
      <ToastContainer />
    </>
  );
};

export default NewAdmin;
