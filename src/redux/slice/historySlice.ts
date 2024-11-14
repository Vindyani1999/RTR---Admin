// src/redux/slices/bookingSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPastBookings } from "../action/historyAction";

interface BookingState {
  pastBookings: any[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  pastBookings: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPastBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPastBookings.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.pastBookings = action.payload;
        }
      )
      .addCase(fetchPastBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default bookingSlice.reducer;
