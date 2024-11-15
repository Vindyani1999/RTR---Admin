import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAdmin } from "../../services/adminService";
import { NewAdmin } from "../../constants/types/newAdminType";

export const createAdminAction = createAsyncThunk(
  "auth/createAdmin",
  async (adminData: NewAdmin, { rejectWithValue }) => {
    try {
      return await createAdmin(adminData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
