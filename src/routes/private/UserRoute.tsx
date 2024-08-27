import { USER_ROLE } from "@/constants/role";
import { useAppSelector } from "@/redux/hooks";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }: { children: React.ReactNode }) => {
  const { role } = useAppSelector((state) => state.auth.user);

  if (role === USER_ROLE.user) {
    return children;
  }

  return <Navigate to={role ? "/dashboard" : "/login"} />;
};

export default UserRoute;
