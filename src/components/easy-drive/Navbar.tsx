import { LogOut, User } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppSelector } from "@/redux/hooks";

const Navbar = () => {
  const websiteName = "EasyDrive";
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAppSelector((state) => state.auth);

  const menuItems = (
    <>
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
        to="/dashboard/booking"
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
      {token ? (
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
              <Link to={"/dashboard"}>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-2 py-2 rounded-md text-sm font-medium"
                : "text-gray-800 hover:text-gray-500 px-2 py-2 rounded-md text-sm font-medium"
            }
          >
            <Button variant="outline">Login</Button>
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-2 py-2 rounded-md text-sm font-medium"
                : "text-gray-800 hover:text-gray-500 px-2 py-2 rounded-md text-sm font-medium"
            }
          >
            <Button variant="outline">Register</Button>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-900">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
