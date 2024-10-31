import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { ThemeProvider } from "@mui/material/styles";
import store, { persistor } from "./redux/store"; // Import persistor
import theme from "./theme/theme"; // Your theme configuration
import App from "./App";

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        {/* PersistGate around App */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
} else {
  console.error("Root container not found");
}
