import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import routers from "./routes/routers.jsx";
import AppRoutes from "./routes/routers.jsx";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
      {/* <RouterProvider router={AppRoutes()} /> */}
      {/* <App /> */}
    </AuthProvider>
  </React.StrictMode>
);
