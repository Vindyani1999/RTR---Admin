import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn } from "../../services/authService";

export const userLogin = createAsyncThunk(
  "auth/login",
  async (userCredentials: Record<string, string>, { rejectWithValue }) =>
    logIn(userCredentials).catch((error) => rejectWithValue(error))
);
