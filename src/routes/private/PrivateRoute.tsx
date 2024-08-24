import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { userEmail, loading } = {
    userEmail: "user@easydrive.com",
    loading: false,
  };

  if (loading) return <LoadingSpinner />;

  if (userEmail) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
