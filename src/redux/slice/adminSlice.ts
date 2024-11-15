import { createSlice } from "@reduxjs/toolkit";
import { createAdminAction, fetchAdminsAction } from "../action/adminAction";
import { NewAdmin } from "../../constants/types/newAdminType";
import { Admins } from "../../constants/types/adminTableType";

interface IAuthState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  admin: NewAdmin | null;
  admins: Admins | [];
}

const initialState: IAuthState = {
  isLoading: false,
  error: null,
  success: false,
  admin: null,
  admins: [],
};

const authSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    resetAdminState(state) {
      state.isLoading = false;
      state.error = null;
      state.success = false;
      state.admin = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAdminAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createAdminAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.admin = action.payload;
      })
      .addCase(createAdminAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.success = false;
      })
      .addCase(fetchAdminsAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdminsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.admins = action.payload;
      })
      .addCase(fetchAdminsAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, resetAdminState } = authSlice.actions;
export default authSlice.reducer;
