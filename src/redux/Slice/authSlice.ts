import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../actions/authAction";

interface IAuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  user: IAuthUser | null;
  resetPasswordEmail: string | null;
}

interface IAuthUser {
  id: number;
  email: string;
  role: string;
}

const initialState: IAuthState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
  user: null,
  resetPasswordEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.adminDetails;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
