import Footer from "@/components/easy-drive/Footer";
import Navbar from "@/components/easy-drive/Navbar";
import { NavLink, Outlet } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Dashboard Menu</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Dashboard Menu</DrawerTitle>
              <DrawerDescription>Click to change pages</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="mt-3 h-[120px]">
                <div className="flex flex-col">
                  <NavLink
                    to="/dashboard/user/my-booking"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    My-Booking
                  </NavLink>
                  <NavLink
                    to="/dashboard/admin/manage-cars"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Manage Cars
                  </NavLink>
                  <NavLink
                    to="/dashboard/admin/manage-bookings"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Manage Bookings
                  </NavLink>
                  <NavLink
                    to="/dashboard/admin/manage-return-cars"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Manage Return Cars
                  </NavLink>
                  <NavLink
                    to="/dashboard/admin/manage-users"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Manage Return Cars
                  </NavLink>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <main className="container mx-auto p-4 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
