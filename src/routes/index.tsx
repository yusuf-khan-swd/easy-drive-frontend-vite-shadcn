import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";
import Booking from "@/pages/Booking";
import BookingDetails from "@/pages/BookingDetails";
import CarDetails from "@/pages/CarDetails";
import Cars from "@/pages/Cars";
import ContactUsPage from "@/pages/Contact";
import CreateCar from "@/pages/Dashboard/AdminDashboard/CreateCar";
import ManageBookings from "@/pages/Dashboard/AdminDashboard/ManageBookings";
import ManageCars from "@/pages/Dashboard/AdminDashboard/ManageCars";
import ManageReturnCars from "@/pages/Dashboard/AdminDashboard/ManageReturnCars";
import ManageUsers from "@/pages/Dashboard/AdminDashboard/ManageUsers";
import ReturnCar from "@/pages/Dashboard/AdminDashboard/ReturnCar";
import UpdateCar from "@/pages/Dashboard/AdminDashboard/UpdateCar";
import Dashboard from "@/pages/Dashboard/Dashboard";
import MyBooking from "@/pages/Dashboard/UserDashboard/MyBooking";
import MyPayment from "@/pages/Dashboard/UserDashboard/MyPayment";
import ErrorPage from "@/pages/ErrorPage";
import ForgotPassword from "@/pages/ForgotPassword";
import Home from "@/pages/Home";
import PrivacyAndPolicy from "@/pages/Legal/PrivacyAndPolicy";
import TermAndCondition from "@/pages/Legal/TermAndCondition";
import TermOfService from "@/pages/Legal/TermOfService";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
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
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <BookingDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/cars",
        element: <Cars />,
      },

      {
        path: "/car/:id",
        element: <CarDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/terms",
        element: <TermAndCondition />,
      },
      {
        path: "/privacy",
        element: <PrivacyAndPolicy />,
      },
      {
        path: "/tos",
        element: <TermOfService />,
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
        path: "/dashboard/admin/manage-cars/create-cars",
        element: (
          <AdminRoute>
            <CreateCar />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-cars/:id",
        element: (
          <AdminRoute>
            <UpdateCar />
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
        path: "/dashboard/admin/manage-return-cars/:id",
        element: (
          <AdminRoute>
            <ReturnCar />
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
