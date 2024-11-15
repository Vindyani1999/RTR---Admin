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
      return Promise.reject(new Error(error.response.data.message));
    } else if (error instanceof Error) {
      return Promise.reject(new Error(error.message));
    }
    return Promise.reject(new Error("An unknown error occurred"));
  }
};

export const getAllPastAdmins = async () => {
  try {
    const { data } = await axiosClient.get("/auth/admins");
    console.log("Fetched admins:", data.users);
    return data.users;
  } catch (error) {
    console.error("Error fetching admins:", error);
    if (error instanceof AxiosError && error.response?.data?.users) {
      return Promise.reject(new Error(error.response.data.data.message));
    } else if (error instanceof Error) {
      return Promise.reject(new Error(error.message));
    }
    return Promise.reject(new Error("An unknown error occurred"));
  }
};
