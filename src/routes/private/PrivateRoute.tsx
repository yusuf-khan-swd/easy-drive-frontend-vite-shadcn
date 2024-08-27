import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);

  if (token) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
