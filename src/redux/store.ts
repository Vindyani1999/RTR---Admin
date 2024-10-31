import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authSlice from "./slice/authSlice";
import { useDispatch } from "react-redux";

// Configure persist settings
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer using the authSlice
const persistedAuthReducer = persistReducer(persistConfig, authSlice);

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore specific actions
        ignoredPaths: ["register"], // Ignore specific paths in the state
      },
    }),
});

// Create a persistor to persist the store
export const persistor = persistStore(store);

// Create a typed dispatch hook
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// TypeScript types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
