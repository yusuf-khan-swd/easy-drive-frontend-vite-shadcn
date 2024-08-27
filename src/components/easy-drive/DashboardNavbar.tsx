import { LogOut, User } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

import logo from "@/assets/logo.png";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setLogout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";

const DashboardNavbar = () => {
  const websiteName = "EasyDrive";
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  };

  const menuItems = (
    <>
      <NavLink
        to="/cars"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        Cars
      </NavLink>
      <NavLink
        to="/booking"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        Booking
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        Contact Us
      </NavLink>
    </>
  );

  const loginItems = (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleLogout}>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Home
              </NavLink>
            </DropdownMenuItem>
            <Link to={"/dashboard"}>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex text-2xl font-bold text-gray-900">
              <img src={logo} alt="EasyDriveLogo" className="mr-2" />
              {websiteName}
            </NavLink>
          </div>
          <div className="hidden md:flex md:space-x-4">{menuItems}</div>
          <div className="hidden md:flex items-center md:space-x-1">
            {loginItems}
          </div>
          <div className="-mr-2 flex md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Menu Items</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="flex flex-col">{menuItems}</div>
                {loginItems}
              </DropdownMenuContent>
            </DropdownMenu>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
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
                          to="/home"
                          className={({ isActive }) =>
                            isActive
                              ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                              : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Home
                        </NavLink>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
