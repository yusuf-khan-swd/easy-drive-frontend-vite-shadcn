import { NavLink } from "react-router-dom";
import { USER_ROLE } from "./role";

export const dashboardItems = (role: string) => {
  const activeLinkStyle = "";
  const unActiveLinkStyle = "";

  const userDashboardItems = (
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
        to="/dashboard/user/my-booking"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            : "text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        My-Booking
      </NavLink>
    </>
  );

  const adminDashboardItems = (
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
    </>
  );

  if (role === USER_ROLE.user) return userDashboardItems;
  if (role === USER_ROLE.admin) return adminDashboardItems;
};
