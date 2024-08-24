import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";
import Booking from "@/pages/Booking";
import CarDetails from "@/pages/CarDetails";
import Cars from "@/pages/Cars";
import ManageBookings from "@/pages/Dashboard/AdminDashboard/ManageBookings";
import ManageCars from "@/pages/Dashboard/AdminDashboard/ManageCars";
import ManageReturnCars from "@/pages/Dashboard/AdminDashboard/ManageReturnCars";
import ManageUsers from "@/pages/Dashboard/AdminDashboard/ManageUsers";
import Dashboard from "@/pages/Dashboard/Dashboard";
import MyBooking from "@/pages/Dashboard/UserDashboard/MyBooking";
import MyPayment from "@/pages/Dashboard/UserDashboard/MyPayment";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SingUp from "@/pages/SingUp";
import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./private/AdminRoute";
import PrivateRoute from "./private/PrivateRoute";
import UserRoute from "./private/UserRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/cars/:id",
        element: <CarDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SingUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/booking",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/my-booking",
        element: (
          <UserRoute>
            <MyBooking />
          </UserRoute>
        ),
      },
      {
        path: "/dashboard/user/my-payment/:id",
        element: (
          <UserRoute>
            <MyPayment />
          </UserRoute>
        ),
      },

      {
        path: "/dashboard/admin/manage-cars",
        element: (
          <AdminRoute>
            <ManageCars />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-bookings",
        element: (
          <AdminRoute>
            <ManageBookings />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-return-cars",
        element: (
          <AdminRoute>
            <ManageReturnCars />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
