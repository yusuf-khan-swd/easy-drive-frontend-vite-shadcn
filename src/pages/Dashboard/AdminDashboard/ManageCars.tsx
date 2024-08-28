import { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/components/easy-drive/DataTable";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { Link } from "react-router-dom";

const ManageCars = () => {
  const { data: carsData, isLoading } = useGetAllCarsQuery(undefined);
  const cars = carsData?.data;
  // const [deleteCar] = useDeleteCarMutation();

  const handleDelete = (id: string) => {
    console.log({ id });
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
        return (
          <Button onClick={() => handleDelete(row.original._id)}>Delete</Button>
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
