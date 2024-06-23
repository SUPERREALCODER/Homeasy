import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
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
        path: "/services/:category",
        element: <Service />,
      },
      // {
      //   path: "/service/:id",
      //   element: <Service />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routers;
