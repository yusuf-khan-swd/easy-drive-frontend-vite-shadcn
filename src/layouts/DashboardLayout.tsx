import Navbar from "@/components/easy-drive/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <h1>Dashboard Layout</h1>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
