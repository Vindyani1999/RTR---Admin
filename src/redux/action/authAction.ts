import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn } from "../../services/authService";

export const userLogin = createAsyncThunk(
  "auth/login",
  async (userCredentials: Record<string, string>, { rejectWithValue }) => {
    const response = await logIn(userCredentials).catch((error) =>
      rejectWithValue(error)
    );
    return response; // This will return the full response including the token
  }
);
