import { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/components/easy-drive/DataTable";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Button } from "@/components/ui/button";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const { data: usersData, isLoading } = useGetAllUsersQuery(undefined);
  const users = usersData?.data;
  console.log(users);
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteUser(id).unwrap();
      toast.success(result?.message || "User deleted Successfully");
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "User delete failed");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row.original._id;

        return (
          <div className="space-x-2">
            <Button variant="destructive" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage Users</h2>
        <div className="space-x-2">
          <Link to="/dashboard/admin/manage-users/create-user">
            <Button>User</Button>
          </Link>
          <Link to="/dashboard/admin/manage-users/create-admin">
            <Button>Admin</Button>
          </Link>
        </div>
      </div>
      <div className="w-full py-4">
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
};

export default ManageUsers;
