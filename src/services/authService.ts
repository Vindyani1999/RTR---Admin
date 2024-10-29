import { AxiosError } from "axios";
import axiosClient from "../api/axiosClient";

export const logIn = async (userCredentials: Record<string, string>) => {
  try {
    const { data } = await axiosClient.post("/auth/login", userCredentials);
    return Promise.resolve(data);
  } catch (error: unknown) {
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
