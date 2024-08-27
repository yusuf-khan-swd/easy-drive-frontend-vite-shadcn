import Footer from "@/components/easy-drive/Footer";
import { Outlet } from "react-router-dom";

import DashboardNavbar from "@/components/easy-drive/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNavbar />

      <main className="container mx-auto p-4 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
