import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Doctor from "./Components/Doctor";
import DoctorSkill from "./Components/DoctorSkill";
import Web from "./Components/Web";
import Footer from "./Components/Footer";
import Appoinments from "./DocApp/Appoinments";
import PaymentQR from "./DocApp/PaymentQR";
import AIchat from "./Components/AIchat";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Timer from "./Components/Timer";
import ErrorPage from "./Components/ErrorPage";
import Trichys from "./visit/Trichys";
import Karurs from "./visit/Karurs";

const Click = () => {
  return (
    <>
      {/* <Hero /> */}
      <Home />
      <Doctor />
      <DoctorSkill />
      <Web />
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Timer />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Click />,
      },
      {
        path: "/Trichy",
        element: <Trichys />,
      },
      {
        path: "/karur",
        element: <Karurs />,
      },
      {
        path: "/Appoinments",
        element: <Appoinments />,
      },
      {
        path: "/PaymentQR",
        element: <PaymentQR />,
      },
      {
        path: "/AIchat",
        element: <AIchat />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/Register",
      //   element: <Navigate to="/register" replace />
      // },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
