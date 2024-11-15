import { AxiosError } from "axios";
import axiosClient from "../api/axiosClient";
import { NewAdmin } from "../constants/types/newAdminType";

export const createAdmin = async (newAdmin: NewAdmin) => {
  try {
    const { data } = await axiosClient.post("/auth/create", newAdmin);
    console.log("New admin created:", data.admin); // Debug: Check new admin data
    return data.admin;
  } catch (error) {
    console.error("Create admin error:", error); // Debug: Error details
    if (error instanceof AxiosError && error.response?.data?.message) {
      return Promise.reject(error.response.data.message);
    } else if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.reject("An unknown error occurred");
  }
};
