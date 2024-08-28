import { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/components/easy-drive/DataTable";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useDeleteCarMutation, useGetAllCarsQuery } from "@/redux/api/carApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageCars = () => {
  const { data: carsData, isLoading } = useGetAllCarsQuery(undefined);
  const cars = carsData?.data;
  const [deleteCar] = useDeleteCarMutation();

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteCar(id).unwrap();
      toast.success(result?.message || "Car deleted Successfully");
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Car delete failed");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "pricePerHour",
      header: "PricePerHour",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row.original._id;

        return (
          <div className="space-x-2">
            <Link to={`/dashboard/admin/manage-cars/${id}`}>
              <Button>Edit</Button>
            </Link>
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
        <h2 className="text-2xl font-bold">Manage Cars</h2>
        <div>
          <Link to="/dashboard/admin/manage-cars/create-cars">
            <Button>Create</Button>
          </Link>
        </div>
      </div>
      <div className="w-full py-4">
        <DataTable columns={columns} data={cars} />
      </div>
    </div>
  );
};

export default ManageCars;
