// src/redux/action/bookingAction.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPastBookings } from "../../services/bookingService";

export const fetchPastBookings = createAsyncThunk(
  "history/fetchPastBookings",
  async (_, { rejectWithValue }) => {
    try {
      const bookings = await getAllPastBookings();
      return bookings;
    } catch (error: any) {
      console.error("Error in fetchBookings action:", error);
      return rejectWithValue(error.message);
    }
  }
);
