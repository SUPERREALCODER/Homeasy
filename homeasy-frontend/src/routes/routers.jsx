import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
// import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Login from "../pages/Login";
const Contact = React.lazy(() => import("../pages/Contact"));
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/services/:category/:subcategory",
        element: <Service />,
      },
      // {
      //   path: "/service/:id",
      //   element: <Service />,
      // },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/logout",
        element: <Login />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routers;
