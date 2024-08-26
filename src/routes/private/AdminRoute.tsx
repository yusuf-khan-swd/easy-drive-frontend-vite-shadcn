import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { role, loading } = { role: "admin", loading: false };

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (role === "admin") {
    return children;
  }

  return (
    <Navigate
      to={role ? "/dashboard" : "/login"}
      state={{ from: location }}
      replace
    />
  );
};

export default AdminRoute;
