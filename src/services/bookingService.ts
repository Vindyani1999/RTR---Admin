import { AxiosError } from "axios";
import axiosClient from "../api/axiosClient";

export const logIn = async (userCredentials: Record<string, string>) => {
  try {
    const { data } = await axiosClient.post("/auth/login", userCredentials);
    if (data.token) {
      localStorage.setItem("token", data.token);
      console.log("Token stored:", data.token); // Debug: Token stored correctly
    }
    return { user: data.user, token: data.token };
  } catch (error: unknown) {
    console.error("Login error:", error); // Debug: Error details
    if (error instanceof AxiosError && error.response?.data) {
      return Promise.reject(error.response.data.message);
    } else if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.reject("An unknown error occurred");
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const { data } = await axiosClient.get("/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Fetched admin profile:", data.admin); // Debug: Check profile data
    return data.admin;
  } catch (error) {
    console.error("Profile fetch error:", error); // Debug: Error details
    if (error instanceof AxiosError && error.response?.data) {
      return Promise.reject(error.response.data.message);
    } else if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.reject("An unknown error occurred");
  }
};

export const logOut = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    await axiosClient.post(
      "/auth/logout",
      {},
      {
        // Make a POST request to the logout endpoint
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // Clear the token from local storage
    localStorage.removeItem("token");
    console.log("User logged out and token cleared."); // Debug: Confirm logout
  } catch (error) {
    console.error("Logout error:", error); // Debug: Error details
    if (error instanceof AxiosError && error.response?.data) {
      return Promise.reject(error.response.data.message);
    } else if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.reject("An unknown error occurred");
  }
};
