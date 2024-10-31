// types.ts

export interface User {
  id: string;
  email: string;
  // Add more user properties as needed
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}

export interface LoginSuccessAction {
  type: "LOGIN_SUCCESS";
  payload: User; // Assuming the payload contains user data
}

export interface LoginFailAction {
  type: "LOGIN_FAIL";
  payload: string; // Error message
}

export interface LogoutAction {
  type: "LOGOUT";
}

export interface ClearErrorAction {
  type: "CLEAR_ERROR";
}

export type AuthActionTypes =
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | ClearErrorAction;
