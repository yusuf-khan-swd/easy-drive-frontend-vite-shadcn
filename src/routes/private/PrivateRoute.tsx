import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = { user: true, loading: false };

  if (loading) return <LoadingSpinner />;

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
