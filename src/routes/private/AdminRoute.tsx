import { USER_ROLE } from "@/constants/role";
import { useAppSelector } from "@/redux/hooks";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { role } = useAppSelector((state) => state.auth.user);

  if (role === USER_ROLE.admin) {
    return children;
  }

  return <Navigate to={role ? "/dashboard" : "/login"} />;
};

export default AdminRoute;
