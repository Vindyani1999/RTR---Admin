import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAdmin, getAllPastAdmins } from "../../services/adminService";
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

export const fetchAdminsAction = createAsyncThunk(
  "auth/fetchAdmins",
  async (_, { rejectWithValue }) => {
    try {
      const admins = await getAllPastAdmins();
      return admins;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
