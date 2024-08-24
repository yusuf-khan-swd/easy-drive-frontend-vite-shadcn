import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const UserRoute = ({ children }: { children: React.ReactNode }) => {
  const { role, loading } = { role: "user", loading: false };

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (role === "user") {
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

export default UserRoute;
