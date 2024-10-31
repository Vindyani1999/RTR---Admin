import { AxiosError } from "axios";
import axiosClient from "../api/axiosClient";

export const logIn = async (userCredentials: Record<string, string>) => {
  try {
    const { data } = await axiosClient.post("/auth/login", userCredentials);
    return Promise.resolve({ user: data.user, token: data.token }); // Assuming your API sends back user details
  } catch (error: unknown) {
    console.error("Login error:", error); // Add this line
    if (error instanceof AxiosError) {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data.message);
      }
    } else if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.reject("An unknown error occurred");
  }
};
