// src/redux/action/bookingAction.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBookings } from "../../services/bookingService";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async (_, { rejectWithValue }) => {
    try {
      const bookings = await getAllBookings();
      return bookings;
    } catch (error: any) {
      console.error("Error in fetchBookings action:", error);
      return rejectWithValue(error.message);
    }
  }
);
