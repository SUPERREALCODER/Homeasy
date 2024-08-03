// import React, { Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "../pages/customer/Home";
import CustomerLayout from "../layouts/CustomerLayout";
// import Contact from "../pages/Contact";
import Service from "../pages/customer/Service";
import Login from "../pages/customer/Login";
// const Contact = React.lazy(() => import("../pages/customer/Contact"));
import Contact from "../pages/customer/Contact";
import ServiceProviderLayout from "../layouts/ServiceProviderLayout";
import Dashboard from "../pages/service_provider/Dashboard";
import { useAuth } from "../context/AuthContext";
// const userRole = "";

const AppRoutes = () => {
  const { userRole } = useAuth();

  const routers = createBrowserRouter([
    {
      path: "/",
      element:
        userRole === "service_provider" ? (
          <Navigate to="/service_provider" />
        ) : (
          <CustomerLayout />
        ),
      children:
        userRole === "service_provider"
          ? []
          : [
              {
                path: "",
                element: <Home />,
              },
              {
                path: "services/:category/:subcategory",
                element: <Service />,
              },
              // {
              //   path: "/service/:id",
              //   element: <Service />,
              // },
              {
                path: "contact",
                element: <Contact />,
              },
              {
                path: "logout",
                element: <Login />,
              },
            ],
    },
    {
      path: "/service_provider",
      element:
        userRole === "service_provider" ? (
          <ServiceProviderLayout />
        ) : (
          <Navigate to="/" />
        ),
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={routers} />;
};

export default AppRoutes;
