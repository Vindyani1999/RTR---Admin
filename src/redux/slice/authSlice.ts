import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../action/authAction";

interface IAuthUser {
  id: string;
  email: string;
  role: string;
}

interface IAuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  user: IAuthUser | null;
  resetPasswordEmail: string | null; // Keep as null if needed
  token: string | null; // Add token to the state
}

const initialState: IAuthState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
  user: null,
  resetPasswordEmail: null, // Set to null
  token: null, // Initialize token as null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null; // Action to clear error, if needed
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.token = null; // Clear token on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user; // Adjust based on your API response
        state.token = action.payload.token; // Store token from login response
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string; // Ensure this is a string
      });
  },
});

// Export actions for use in components
export const { clearError, logout } = authSlice.actions;

// Export the reducer for the store
export default authSlice.reducer;
