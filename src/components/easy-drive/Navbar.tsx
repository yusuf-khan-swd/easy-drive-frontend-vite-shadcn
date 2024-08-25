// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarTrigger,
// } from "@/components/ui/menubar";
// import { LogOut, Settings, User } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0">
//             <NavLink to="/" className="text-2xl font-bold text-gray-900">
//               MyLogo
//             </NavLink>
//           </div>
//           <div className="hidden md:flex md:space-x-4">
//             {/* Use Menubar with MenubarMenu */}
//             <Menubar>
//               <MenubarMenu>
//                 <MenubarTrigger>Home</MenubarTrigger>
//                 <MenubarContent>
//                   <MenubarItem>
//                     <NavLink to="/home">Home</NavLink>
//                   </MenubarItem>
//                   <MenubarItem>
//                     <NavLink to="/cars">Cars</NavLink>
//                   </MenubarItem>
//                   <MenubarItem>
//                     <NavLink to="/about">About Us</NavLink>
//                   </MenubarItem>
//                 </MenubarContent>
//               </MenubarMenu>

//               <MenubarMenu>
//                 <MenubarTrigger>Dashboard</MenubarTrigger>
//                 <MenubarContent>
//                   <MenubarItem>
//                     <NavLink to="/dashboard">Dashboard</NavLink>
//                   </MenubarItem>
//                   <MenubarItem>
//                     <NavLink to="/dashboard/booking">Bookings</NavLink>
//                   </MenubarItem>
//                   <MenubarItem>
//                     <NavLink to="/dashboard/admin/manage-cars">
//                       Manage Cars
//                     </NavLink>
//                   </MenubarItem>
//                 </MenubarContent>
//               </MenubarMenu>
//             </Menubar>
//           </div>
//           <div className="hidden md:flex md:items-center md:space-x-2">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost">
//                   <User className="h-5 w-5" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56">
//                 <DropdownMenuItem>
//                   <User className="mr-2 h-4 w-4" />
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Settings className="mr-2 h-4 w-4" />
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <LogOut className="mr-2 h-4 w-4" />
//                   Logout
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const websiteName = "EasyDrive";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-900">
              {websiteName}
            </NavLink>
          </div>
          <div className="hidden md:flex md:space-x-4">
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
          </div>
          <div className="hidden md:flex md:space-x-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              <Button>Login</Button>
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              <Button>Register</Button>
            </NavLink>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
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
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-800 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-800 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Cars
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-800 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-800 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
