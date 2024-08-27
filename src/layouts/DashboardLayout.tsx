import Footer from "@/components/easy-drive/Footer";
import { Outlet } from "react-router-dom";

import DashboardNavbar from "@/components/easy-drive/DashboardNavbar";
import { dashboardItems } from "@/constants/dashboardItems";
import { useAppSelector } from "@/redux/hooks";

const DashboardLayout = () => {
  const { role } = useAppSelector((state) => state.auth.user);

  return (
    <div>
      <DashboardNavbar />

      <main className="container mx-auto p-4 min-h-screen">
        <div className="grid grid-cols-12">
          <div className="hidden lg:block lg:col-span-2 lg:ml-[-12px] lg:mt-[-12px]">
            <div className="flex flex-col">{dashboardItems(role)}</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
