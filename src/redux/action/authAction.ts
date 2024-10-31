import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn, getProfile } from "../../services/authService";

export const userLogin = createAsyncThunk(
  "auth/login",
  async (userCredentials: Record<string, string>, { rejectWithValue }) => {
    try {
      return await logIn(userCredentials);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAdminProfile = createAsyncThunk(
  "auth/fetchAdminProfile",
  async (_, { rejectWithValue }) => {
    try {
      const adminData = await getProfile();
      console.log("Admin profile fetched:", adminData); // Debug: Verify fetched data
      return adminData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
