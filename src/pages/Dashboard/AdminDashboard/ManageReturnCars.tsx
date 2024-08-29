import { DataTable } from "@/components/easy-drive/DataTable";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useGetAllBookingsQuery } from "@/redux/api/bookingApi";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

const ManageReturnCars = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);
  const bookings = data?.data;

  if (isLoading) return <LoadingSpinner />;

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "user.email",
      header: "User",
    },
    {
      accessorKey: "car.name",
      header: "Car",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "startTime",
      header: "StartTime",
    },
    {
      accessorKey: "totalCost",
      header: "TotalCost",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row.original._id;

        return (
          <div className="space-x-2">
            <Link to={`/dashboard/admin/manage-return-cars/${id}`}>
              <Button>Return</Button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Manage Return Cars</h2>
      </div>
      <div className="w-full py-4">
        {!bookings || bookings?.length < 1 ? (
          <h2>No Data Available</h2>
        ) : (
          <DataTable columns={columns} data={bookings} />
        )}
      </div>
    </div>
  );
};

export default ManageReturnCars;
