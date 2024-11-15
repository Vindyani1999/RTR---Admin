// src/services/bookingService.ts

import { AxiosError } from "axios";
import { axiosClientBookings } from "../api/axiosClient";

export const getAllBookings = async () => {
  try {
    const { data } = await axiosClientBookings.get("/bookings/all");
    console.log("Fetched bookings:", data); // For debugging
    return data.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    if (error instanceof AxiosError && error.response?.data?.data) {
      return Promise.reject(new Error(error.response.data.data.message));
    } else if (error instanceof Error) {
      return Promise.reject(new Error(error.message));
    }
    return Promise.reject(new Error("An unknown error occurred"));
  }
};

export const getAllPastBookings = async () => {
  try {
    const { data } = await axiosClientBookings.get("/history/all");
    console.log("Fetched bookings:", data); // For debugging
    return data.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    if (error instanceof AxiosError && error.response?.data?.data) {
      return Promise.reject(new Error(error.response.data.data.message));
    } else if (error instanceof Error) {
      return Promise.reject(new Error(error.message));
    }
    return Promise.reject(new Error("An unknown error occurred"));
  }
};
